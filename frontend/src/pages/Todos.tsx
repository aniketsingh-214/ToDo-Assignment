import React from "react";
import TodoForm from "../components/todos/TodoForm";
import TodoItem from "../components/todos/TodoItem";
import { useTodos } from "../hooks/useTodos";

const Todos: React.FC = () => {
  const { list } = useTodos();

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Your Tasks</h2>
          <p className="text-gray-600">Organize your day, one task at a time</p>
        </div>

        <div className="mb-8">
          <TodoForm />
        </div>

        {list.isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        )}

        {list.data?.length === 0 && !list.isLoading && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-600 text-lg">
              No tasks found. Create your first task!
            </p>
          </div>
        )}

        <div className="space-y-3">
          {list.data?.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
