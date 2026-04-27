// server/src/lib/response-handler.ts
import { Response } from "express";

/**
 * Send a standardized success response
 */

type SuccessOptions<T> = { data: T; message?: string; statusCode?: number }

export function sendSuccess<T>(res: Response, { data, statusCode = 200, message = "Successful" }: SuccessOptions<T>) {
  return res.status(statusCode).json({ success: true, message, data, });
}

/**
 * Send a standardized error response
 */

type ErrorOptions = { errors?: unknown, message?: string; statusCode?: number; }

export function sendError(res: Response, { errors, message = "Something went wrong", statusCode = 500 }: ErrorOptions) {
  return res.status(statusCode).json({ success: false, message, errors, });
}
