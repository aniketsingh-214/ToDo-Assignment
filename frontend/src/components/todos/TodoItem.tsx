import React, { useState } from "react";
import { Todo } from "../../schemas/todo.schema";
import { useTodos } from "../../hooks/useTodos";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const { update, remove } = useTodos();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const toggleCompleted = async () => {
    await update.mutateAsync({
      id: todo._id,
      payload: { completed: !todo.completed },
    });
  };

  const save = async () => {
    await update.mutateAsync({ id: todo._id, payload: { title } });
    setEditing(false);
  };

  const del = async () => {
    if (confirm("Delete this todo?")) await remove.mutateAsync(todo._id);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-4 mb-3 border border-gray-100">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
          className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 cursor-pointer"
        />
        {editing ? (
          <>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none"
            />
            <button
              onClick={save}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-sm"
            >
              Save
            </button>
            <button
              onClick={() => {
                setEditing(false);
                setTitle(todo.title);
              }}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium text-sm"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <div
              className={`flex-1 text-gray-800 ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.title}
            </div>
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
            >
              Edit
            </button>
            <button
              onClick={del}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium text-sm"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
