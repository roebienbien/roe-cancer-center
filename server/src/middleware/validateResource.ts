import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";

export const validateResource =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        }));

        // return sendError(res, "Validation failed", formattedErrors, 400);
        return res.send(error).status(400);
      }
      return res.send(error).status(400);
    }
  };
