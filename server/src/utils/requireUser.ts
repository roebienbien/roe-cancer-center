import { AuthRequest } from "../middleware/authenticate";
import { createError } from "./app-error";

export const requireUser = (req: AuthRequest) => {
  if (!req.user) {
    throw createError("Unauthorized", 401)
  }

  return req.user
}
