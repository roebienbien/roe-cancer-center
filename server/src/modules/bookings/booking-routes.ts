import express, { Response, Request } from 'express'
import { authenticate, AuthRequest } from '../../middleware/authenticate';
import { authorize } from '../../middleware/authorize';
import { prisma } from '../../lib/prisma';
import * as bookingsController from './booking-controller';


const router = express.Router();

router.post("/", authenticate, authorize("PATIENT"), bookingsController.createBooking);
router.get("/me", authenticate, async (req: AuthRequest, res: Response) => {
  const bookings = await prisma.booking.findMany({
    where: {
      userId: req.user!.userId,
    },
    orderBy: {
      date: "desc"
    }
  })

  res.json(bookings)
})

router.get("/", bookingsController.getBookings)
router.get("/:id", authenticate, authorize("PATIENT"), bookingsController.getBookingById)

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

