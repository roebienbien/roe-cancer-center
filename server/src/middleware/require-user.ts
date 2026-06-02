import { Request } from "express";
import { createError } from "../utils/app-error";

export const requireUser = (req: Request) => {
  if (!req.user) {
    throw createError("Unauthenticated", 401);
  }

  return req.user;
};
