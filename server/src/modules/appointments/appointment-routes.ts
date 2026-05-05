import express, { Response, Request } from 'express'
import { authenticate, AuthRequest } from '../../middleware/authenticate';
import { authorize } from '../../middleware/authorize';
import { prisma } from '../../lib/prisma';
import * as appointmentController from './appointment-controller';
import { Role } from '@prisma/client';


const router = express.Router();

router.post("/", authenticate, authorize(Role.ADMIN, Role.PATIENT), appointmentController.createAppointment);
router.get("/me", authenticate, async (req: AuthRequest, res: Response) => {
  const bookings = await prisma.appointment.findMany({
    where: {
      userId: req.user!.userId,
    },
    orderBy: {
      scheduleAt: "desc"
    }
  })

  res.json(bookings)
})

router.get("/", appointmentController.getAllAppointments)
// router.get("/:id", authenticate, authorize("PATIENT"), appointmentController.getAllAppointments)
router.get("/:id", appointmentController.getAppointmentById)

// router.get("/bookings/:id", async (req: Request, res: Response) => {
//   const booking = await prisma.booking.findUnique({
//     where: {
//       id: Number(req.params.id),
//     },
//     include: {
//       user: true,
//     },
//   });
//
//   res.json(booking);
// });

export default router;

