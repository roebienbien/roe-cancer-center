import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import * as doctorSlotService from "./doctor-slot-service";
import { Request, Response } from "express";

export const getAvailableDoctorSlots = asyncHandler(
  async (req: Request, res: Response) => {
    const availableSlots = await doctorSlotService.getAvailableDoctorSlots();

    return sendSuccess(res, { data: availableSlots });
  },
);

export const assignDoctorToSlot = asyncHandler(
  async (req: Request, res: Response) => {
    const assignment = await doctorSlotService.assignDoctorToSlot(
      req.body.doctorId,
      req.body.slotId,
    );

    console.log("req.body", req.body);

    return sendSuccess(res, {
      data: assignment,
      message: "Doctor assigned to slot",
      statusCode: 201,
    });
  },
);
