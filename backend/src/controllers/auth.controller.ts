// controllers/auth.controller.ts
import type { Request, Response } from "express";
import User from "../models/User";
import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User already exists" });

  const hashed = await hashPassword(password);
  const user = await User.create({ email, password: hashed });

  // <-- convert ObjectId to string
  return res.json({ token: generateToken(user._id.toString()) });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const match = await comparePassword(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  // <-- convert ObjectId to string
  return res.json({ token: generateToken(user._id.toString()) });
};
