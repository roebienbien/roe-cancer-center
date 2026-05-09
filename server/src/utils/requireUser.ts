import { Request } from "express";
import { createError } from "./app-error";

export const requireUser = (req: Request) => {
  if (!req.user) {
    throw createError("Unauthorized", 401);
  }

  return req.user;
};
