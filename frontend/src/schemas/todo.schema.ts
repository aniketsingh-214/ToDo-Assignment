import { z } from "zod";

export const todoCreateSchema = z.object({
  title: z.string().min(1, { message: "Title required" }),
});

export const todoUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  completed: z.boolean().optional(),
});

export type TodoCreateInput = z.infer<typeof todoCreateSchema>;
export type TodoUpdateInput = z.infer<typeof todoUpdateSchema>;

export type Todo = {
  _id: string;
  userId: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};
