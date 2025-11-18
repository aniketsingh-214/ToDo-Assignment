import { Router } from "express";
import { auth } from "../middlewares/auth";
import {
  createTodo,
  listTodos,
  updateTodo,
  deleteTodo
} from "../controllers/todo.controller";

const router = Router();

router.post("/", auth, createTodo);
router.get("/", auth, listTodos);
router.put("/:id", auth, updateTodo);
router.delete("/:id", auth, deleteTodo);

export default router;
