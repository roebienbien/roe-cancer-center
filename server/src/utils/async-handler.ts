import { RequestHandler } from "express";

/**
 * Wraps an async Express route handler and forwards any errors to Express error middleware.
 *
 * Why this exists:
 * - Express does NOT automatically catch errors thrown in async functions
 * - Without this, you'd need try/catch in every controller
 *
 * @param fn - Your async route handler (controller)
 * @returns A new handler that catches and forwards errors via next()
 */
export const asyncHandler =
  (fn: RequestHandler): RequestHandler =>
    (req, res, next) =>
      // Ensure the handler result is treated as a Promise
      // (works for both async and non-async functions)
      Promise.resolve(fn(req, res, next))
        // If the promise rejects or an error is thrown,
        // pass it to Express error handling middleware
        .catch(next);
