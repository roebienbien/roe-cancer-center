import { Request, Response, NextFunction, RequestHandler } from "express";

/**
 * Utility wrapper for async Express route handlers.
 *
 * Express does not automatically catch errors thrown inside async functions.
 * Without this wrapper, every controller would need its own try/catch block.
 *
 * This helper ensures that:
 * - resolved promises continue normally
 * - rejected promises are forwarded to Express error middleware via `next()`
 *
 * @example
 * router.get(
 *   "/users",
 *   asyncHandler(async (req, res) => {
 *     const users = await getUsers();
 *     res.json(users);
 *   }),
 * );
 */

export const asyncHandler =
  <P = any, ResBody = any, ReqBody = any, ReqQuery = any>(
    fn: RequestHandler<P, ResBody, ReqBody, ReqQuery>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery> =>
  (
    req: Request<P, ResBody, ReqBody, ReqQuery>,
    res: Response,
    next: NextFunction,
  ) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
