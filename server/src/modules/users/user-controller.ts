import { Request, RequestHandler, Response } from "express";
import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import { logger } from "../../utils/logger";
import * as userService from "./user-service";
import { UserParams } from "../../types/express";

// export const getUser = asyncHandler<{ id: string }>(async (req, res) => {
// export const getUserById = asyncHandler<UserParams>(async (req, res) => {
export const getUserById = asyncHandler(
  async (req: Request<UserParams>, res) => {
    const user = await userService.getUserById(req.params.id);
    return sendSuccess(res, { data: user });
  },
);

// export const deleteUser = asyncHandler<UserParams>(async (req, res) => {
export const deactivateUser = asyncHandler<UserParams>(async (req, res) => {
  const targetId = req.params.id;
  const actorId = req.user!.userId; //non-null assertion

  const result = await userService.deactivateUser(targetId, actorId);

  logger.info({ targetId, actorId }, "User soft deleted");

  return sendSuccess(res, { data: result, message: "User soft Deleted" });
});

export const getAllUsers = asyncHandler(async (_: Request, res: Response) => {
  const users = await userService.getAllUsers();

  return sendSuccess(res, { data: users });
});
