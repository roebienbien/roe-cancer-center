import * as appointmentService from "./appointment-service";
import { Request, Response } from "express";
import {
  CreateAppointmentInput,
  UpdateAppointmentStatusInputBody,
  UpdateAppointmentStatusInputParams,
} from "./appointment-schema";
import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import { requireUser } from "../../utils/requireUser";
import { createError } from "../../utils/app-error";
import { getPatientByUserId } from "../patients/patient-service";
import { UserParams } from "../../types/express";
import { prisma } from "../../lib/prisma";
import { send } from "node:process";

export const getMyAppointments = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = requireUser(req);

    const appointments = await appointmentService.getMyAppointments(userId);

    return sendSuccess(res, {
      data: appointments,
      message: "appointments fetched",
    });
  },
);

export const createAppointment = asyncHandler(
  async (req: Request<{}, {}, CreateAppointmentInput>, res: Response) => {
    const { doctorSlotId } = req.body;

    const { userId } = requireUser(req);
    // const patient = await getPatientByUserId(userId);
    const patient = await prisma.patient.findUnique({
      where: {
        userId: userId,
      },
    });

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
