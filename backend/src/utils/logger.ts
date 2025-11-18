import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  message: String,
  stack: String,
  route: String,
  time: { type: Date, default: Date.now }
});

const Log = mongoose.model("Log", logSchema);

export const logError = async (err: any, route: string) => {
  await Log.create({
    message: err.message,
    stack: err.stack,
    route,
  });
};
