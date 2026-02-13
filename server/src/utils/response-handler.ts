// server/src/lib/response-handler.ts
import { Response } from "express";

/**
 * Send a standardized success response
 */
export function sendSuccess<T>(
  res: Response,
  data: T,
  statusCode = 200,
  message = "Success",
) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

/**
 * Send a standardized error response
 */
export function sendError(
  res: Response,
  message = "Something went wrong",
  statusCode = 500,
  errors: any = null,
) {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
}
