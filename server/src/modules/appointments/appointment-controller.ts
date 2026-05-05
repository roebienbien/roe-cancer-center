import { AuthRequest } from "../../middleware/authenticate";
import * as appointmentService from './appointment-service'
import { prisma } from '../../lib/prisma';
import { Request, RequestHandler, Response } from "express";
import { createAppointmentSchema } from "./appointment-schema";
import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";


type Params = { id: string }

//HELPER
// export const requireUser = (req: AuthRequest) => {
//   if (!req.user) {
//     throw new Error("Unauthorized");
//   }
//   return req.user;
// };
export const createAppointment = asyncHandler(async (req: AuthRequest, res: Response) => {
  const parsed = createAppointmentSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      message: "Validation Error",
      errors: parsed.error.format(), //deprecated
    })
  }

  if (!req.user) {
    res.status(401).json({ message: "Unauthorized" })
    return
  }

  if (!parsed.data) {
    res.status(401).json({ message: "Unauthorized" })
    return
  }

  const appointment = await appointmentService.createAppointment(
    req.user?.userId,
    parsed.data.scheduleAt
  )
  return sendSuccess(res, { data: appointment, message: "Appointment created", statusCode: 201 })

})

export const getAppointments = asyncHandler(async (_: Request, res: Response) => {
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
