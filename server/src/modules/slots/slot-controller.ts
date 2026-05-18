import { asyncHandler } from "../../utils/async-handler";
import { Request, Response } from "express";
import * as slotService from "./slot-service";
import { requireUser } from "../../utils/requireUser";
import { sendSuccess } from "../../utils/response-handler";

export const createSlot = asyncHandler(async (req: Request, res: Response) => {
  const { userId: doctorId } = requireUser(req);

  const slot = await slotService.createSlot(doctorId, req.body);

  return sendSuccess(res, {
    data: slot,
    message: "Slot created successfully",
    statusCode: 201,
  });
});
