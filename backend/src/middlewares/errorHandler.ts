import { Request, Response, NextFunction } from "express";
import { logError } from "../utils/logger";

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  await logError(err, req.originalUrl);
  return res.status(500).json({ error: err.message || "Server error" });
};
