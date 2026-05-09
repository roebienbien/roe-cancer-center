import { Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import { logger } from "../../utils/logger";
import * as userService from "./user-service";

type Params = {
  id: string;
};

export const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  logger.info({ userId: user.id, email: user.email }, "User created");

  return sendSuccess(res, {
    data: user,
    message: "User created successfully",
    statusCode: 201,
  });
});

export const getUser = asyncHandler<Params>(async (req, res) => {
  const user = await userService.getUserById(req.params.id);

  return sendSuccess(res, { data: user });
});

export const deleteUser = asyncHandler<Params>(async (req, res) => {
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
