import * as appointmentService from "./appointment-service";
import { Request, Response } from "express";
import { CreateAppointmentInput } from "./appointment-schema";
import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import { requireUser } from "../../middleware/require-user";
import { createError } from "../../utils/app-error";
import { UserParams } from "../../types/express";
import { prisma } from "../../lib/prisma";
import { getPatientByUserId } from "../patients/patient-service";

export const createAppointment = asyncHandler(
  async (req: Request<{}, {}, CreateAppointmentInput>, res: Response) => {
    const { userId } = requireUser(req);
    const { doctorSlotId } = req.body;

    const patient = await getPatientByUserId(userId);
    // const patient = await prisma.patient.findUnique({
    //   where: {
    //     userId: userId,
    //   },
    // });

    if (!patient) {
      throw createError("Patient profile required before booking", 400);
    }

    const appointment = await appointmentService.createAppointment(
      patient.id,
      doctorSlotId,
    );

    return sendSuccess(res, {
      data: appointment,
      message: "Appointment created",
      statusCode: 201,
    });
  },
);

export const getMyAppointments = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = requireUser(req);

    const appointments = await appointmentService.getMyAppointments(userId);
    console.log("patient: ", appointments);

    return sendSuccess(res, {
      data: appointments,
      message: "appointments fetched",
    });
  },
);

export const getAllAppointments = asyncHandler(
  async (_: Request, res: Response) => {
    const appointments = await appointmentService.getAllAppointments();

    return sendSuccess(res, { data: appointments });
  },
);

export const getAppointmentById = asyncHandler(
  async (req: Request<UserParams>, res: Response) => {
    const { id } = req.params;
    const appointment = await appointmentService.getAppointmentById(id);

    sendSuccess(res, { data: appointment });
  },
);

// export const updateAppointmentStatus = asyncHandler(
//   async (
//     req: Request<
//       UpdateAppointmentStatusInputParams,
//       {},
//       UpdateAppointmentStatusInputBody
//     >,
//     res: Response,
//   ) => {
//     const { userId } = requireUser(req);
//     const { id } = req.params;
//     const { status } = req.body;
//
//     const appointment = await appointmentService.updateAppointmentStatus(
//       id,
//       userId,
//       status,
//     );
//
//     return sendSuccess(res, {
//       data: appointment,
//       message: `Appointment: ${status}`,
//     });
//   },
// );
