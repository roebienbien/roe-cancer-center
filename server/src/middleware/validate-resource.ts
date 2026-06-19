import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { createError } from "../utils/app-error";

export const validateResource =
  (schema: z.ZodSchema) => (req: Request, _: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((issue) => ({
          path: issue.path.slice(1).join("."),
          // path: issue.path.join("."),
          message: issue.message,
        }));

        throw createError("Validation failed", 400, formattedErrors);
      }

      if (error instanceof Error) throw createError(error.message, 400, error);

      throw createError("Unknown validation error", 400);
    }
  };
