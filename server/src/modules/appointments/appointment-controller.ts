import { AuthRequest } from "../../middleware/authenticate";
import * as appointmentService from './appointment-service'
import { prisma } from '../../lib/prisma';
import { Request, Response } from "express";
import { createAppointmentSchema } from "./appointment-schema";
import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import { requireUser } from "../../utils/requireUser";
import app from "../../app";
import { createError } from "../../utils/app-error";

export const createAppointment = asyncHandler(async (req: AuthRequest, res: Response) => {
  const parsed = createAppointmentSchema.safeParse(req.body);

  if (!parsed.success) {
    const errors = parsed.error.issues.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    throw createError("validation error", 400, errors)
  }

  const { userId } = requireUser(req);
  const patient = await prisma.patient.findUnique({
    where: {
      userId
    }
  })

  if (!patient) {
    throw createError("Patient profile required before booking", 400)
  }

  const appointment = await appointmentService.createAppointment(
    patient.id,
    parsed.data.startAt,
    parsed.data.endAt
  )

  return sendSuccess(res, { data: appointment, message: "Appointment created", statusCode: 201 })
})

export const getAllAppointments = asyncHandler(async (_: Request, res: Response) => {
  const appointments = await prisma.appointment.findMany({
    // where: { id: appointmentId },
    include: {
      user: {
        select: {
          email: true,
        }
      }
    }
  });

  return sendSuccess(res, { data: appointments })
})


export const getAppointmentById = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const appointment = await appointmentService.getAppointmentById(id as string)


  sendSuccess(res, { data: appointment })
})
