import { NextFunction, Request, Response } from "express";
import { sendError } from "../utils/response-handler";
import { logger } from "../utils/logger";

type AppError = Error & {
  statusCode?: number;
  isOperational: boolean;
  errors: any;
};

export const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  _: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const isOperational = err.isOperational || false;

  logger.error(
    {
      statusCode,
      isOperational,
      errors: err.errors,
      method: req.method,
      url: req.originalUrl,
      message: err.message,
      stack: err.stack,
      // user: req.user?.userId || null,
    },
    "Request failed",
  );

  return sendError(res, {
    message: isOperational ? err.message : "Internal Server Error",
    statusCode,
    errors: process.env.NODE_ENV === "development" ? err.errors : undefined,
  });
};
