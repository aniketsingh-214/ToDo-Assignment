import { Request, Response } from "express";
import Todo from "../models/Todo";

export const createTodo = async (req: Request, res: Response) => {
  const todo = await Todo.create({
    userId: req.user!,
    title: req.body.title
  });
  res.json(todo);
};

export const listTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find({ userId: req.user! }).sort({ createdAt: -1 });
  res.json(todos);
};

export const updateTodo = async (req: Request, res: Response) => {
  const updated = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.user },
    { $set: req.body },
    { new: true }
  );
  res.json(updated);
};

export const deleteTodo = async (req: Request, res: Response) => {
  await Todo.deleteOne({ _id: req.params.id, userId: req.user });
  res.json({ message: "Deleted" });
};
