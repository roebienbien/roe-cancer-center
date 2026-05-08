import { Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler";
import { sendError, sendSuccess } from "../../utils/response-handler";
import { logger } from "../../utils/logger";
import { AuthRequest } from "../../middleware/authenticate";
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

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const users = await userService.getUserById(req.params.id as string);
  return sendSuccess(res, { data: users });
  // return sendSuccess(res, users);
});

export const deleteUser = asyncHandler(
  async (req: Request<Params>, res: Response) => {
    const user = req.user;

    if (!user) {
      return sendError(res, { message: "Unauthorized", statusCode: 401 });
    }
    const targetId = req.params.id;
    const actorId = user.userId;

    const result = await userService.deactivateUser(targetId, actorId);

    logger.info({ targetId, actorId }, "User soft deleted");

    return sendSuccess(res, { data: result, message: "User soft Deleted" });
  },
);

// export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
//   const users = await userService.deleteUser(req.params.id as string);
//   return sendSuccess(res, { data: users });
//   // return sendSuccess(res, users);
// });

export const getAllUsers = asyncHandler(async (_: Request, res: Response) => {
  const users = await userService.getAllUsers();
  return sendSuccess(res, { data: users });
});
