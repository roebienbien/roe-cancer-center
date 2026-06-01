import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import * as doctorSlotService from "./doctor-slot-service";
import { Request, Response } from "express";

export const getAvailableDoctorSlots = asyncHandler(async (_, res) => {
  const slots = await doctorSlotService.getAvailableDoctorSlots();

  return sendSuccess(res, { data: slots, message: "Available slots" });
});

export const assignDoctorToSlot = asyncHandler(async (req, res) => {
  // const assignment = await doctorSlotService.assignDoctorToSlot(
  //   req.body.doctorId,
  //   req.body.slotId,
  // );
  const { doctorId, slotId } = req.params;
  const doctorSlot = await doctorSlotService.assignDoctorToSlot(
    doctorId,
    slotId,
  );

  console.log("DoctorSlot", req.params);

  return sendSuccess(res, {
    data: doctorSlot,
    message: "Doctor assigned to slot",
    statusCode: 201,
  });
});
