import { asyncHandler } from "../../utils/async-handler";
import { Request, Response } from "express";
import * as slotService from "./slot-service";
import { sendSuccess } from "../../utils/response-handler";
import { CreateSlotInput } from "./slot-schema";

export const createSlot = asyncHandler<{}, {}, CreateSlotInput>(
  async (req, res) => {
    const slot = await slotService.createSlot(req.body);

    return sendSuccess(res, {
      data: slot,
      message: "Slot created successfully",
      statusCode: 201,
    });
  },
);

// export const getAvailableSlots = asyncHandler(
//   async (_req: Request, res: Response) => {
//     const slots = await slotService.getAvaialbleSlots();
//
//     return sendSuccess(res, {
//       data: slots,
//       message: "Available slots fetched",
//     });
//   },
// );
