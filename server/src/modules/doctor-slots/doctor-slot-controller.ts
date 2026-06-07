import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import * as doctorSlotService from "./doctor-slot-service";

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

export const getAvailableDoctorSlots = asyncHandler(async (_, res) => {
  const slots = await doctorSlotService.getAvailableDoctorSlots();

  return sendSuccess(res, { data: slots, message: "Available slots" });
});

export const getDoctorSlotsById = asyncHandler(async (req, res) => {
  const slots = await doctorSlotService.getDoctorSlotById(req.params.id);

  return sendSuccess(res, { data: slots, message: "Available slots" });
});
