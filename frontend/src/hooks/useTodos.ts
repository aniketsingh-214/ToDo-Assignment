import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../api/client";
import { Todo, TodoCreateInput, TodoUpdateInput } from "../schemas/todo.schema";

const TODOS_KEY = ["todos"];

export const useTodos = () => {
  const qc = useQueryClient();

  const list = useQuery<Todo[]>({
    queryKey: TODOS_KEY,
    queryFn: async () => {
      const { data } = await client.get("/todos");
      return data;
    },
  });

  const create = useMutation({
    mutationFn: async (payload: TodoCreateInput) => {
      const { data } = await client.post("/todos", payload);
      return data as Todo;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: TODOS_KEY }),
  });

  const update = useMutation({
    mutationFn: async ({ id, payload }: { id: string; payload: TodoUpdateInput }) => {
      const { data } = await client.put(`/todos/${id}`, payload);
      return data as Todo;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: TODOS_KEY }),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { data } = await client.delete(`/todos/${id}`);
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: TODOS_KEY }),
  });

  return { list, create, update, remove };
};
