import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoCreateSchema, TodoCreateInput } from "../../schemas/todo.schema";
import { useTodos } from "../../hooks/useTodos";

const TodoForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<TodoCreateInput>({
    resolver: zodResolver(todoCreateSchema),
  });

  const { create } = useTodos();

  const onSubmit = async (values: TodoCreateInput) => {
    try {
      await create.mutateAsync(values);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-lg p-6 mb-6"
    >
      <div className="flex gap-3">
        <input
          placeholder="What needs to be done?"
          {...register("title")}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg whitespace-nowrap"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
