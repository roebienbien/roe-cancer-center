import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { createError } from "../utils/app-error";
import type { ParsedQs } from "qs";
//
// type RequestSchema = z.ZodType<{
//   body?: unknown;
//   query?: unknown;
//   params?: unknown;
// }>;
//
// export const validateResource =
//   <T extends RequestSchema>(schema: T) =>
//   (req: Request, _: Response, next: NextFunction): void => {
//     const result = schema.safeParse({
//       body: req.body,
//       query: req.query,
//       params: req.params,
//     });
//
//     if (result.success) {
//       req.body = result.data.body ?? req.body;
//       req.query = (result.data.query ?? req.query) as ParsedQs;
//       req.params = (result.data.params ?? req.params) as Record<string, string>;
//       return next();
//     }
//
//     const formattedErrors = result.error.issues.map((issue) => ({
//       path: issue.path.join("."),
//       message: issue.message,
//     }));
//
//     next(createError("Validation Errors", 400, formattedErrors));
//   };

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
          path: issue.path.join("."),
          message: issue.message,
        }));

        throw createError("Validation Errors", 400, formattedErrors);
      }

      if (error instanceof Error) throw createError(error.message, 400, error);

      throw createError("Unknown validation error", 400);
    }
  };
