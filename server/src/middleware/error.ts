import { NextFunction, Request, Response } from "express";
import { sendError } from "../utils/response-handler";
import { logger } from "../utils/logger";
import { Prisma } from "@prisma/client";

type AppError = Error & {
  statusCode?: number;
  isOperational?: boolean;
  errors?: any;
};

const prismaErrorMap: Record<string, string> = {
  P2002: "Unique constraint failed",
  P2003: "Foreign key constraint failed",
  P2025: "Record not found",
};

function normalizeError(err: any) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return {
      type: "Prisma",
      code: err.code,
      message: prismaErrorMap[err.code] || err.message,
      meta: err.meta,
    };
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    return {
      type: "PrismaClientValidationError",
      message: err.message,
      stack: err.stack,
    };
  }

  // normal errors
  if (err instanceof Error) {
    return {
      type: err.name,
      message: err.message,
      stack: err.stack,
      errors: (err as AppError).errors,
      // stack: err.stack,
    };
  }

  return {
    type: "Unknown",
    err,
  };
}

//todo: add prisma error map
//todo: strip stack in PRODUCTION

export const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  _: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const isOperational = err.isOperational || false;

  logger.error({
    message: "API Request failed",
    method: req.method,
    url: req.originalUrl,
    statusCode,
    isOperational,
    error: normalizeError(err),
    // stack: err.stack,
    // user: req.user?.userId || null,
  });

  return sendError(res, {
    message: isOperational ? err.message : "Internal Server Error",
    statusCode,
    errors: process.env.NODE_ENV === "development" ? err.errors : undefined,
  });
};
