import { AuthRequest } from "../../middleware/authenticate";
import { createBookingSchema } from "./booking-schema";
import * as bookingsService from './booking-service'
import { prisma } from '../../lib/prisma';
import { RequestHandler, Response } from "express";


type Params = { id: string }

//HELPER
// export const requireUser = (req: AuthRequest) => {
//   if (!req.user) {
//     throw new Error("Unauthorized");
//   }
//   return req.user;
// };

export const createBooking = async (req: AuthRequest, res: Response) => {
  try {
    const parsed = createBookingSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        message: "Validation Error",
        errors: parsed.error.flatten(), //deprecated
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

    const booking = await bookingsService.createBooking(req.user?.userId, parsed.data.date)

    res.json(booking)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server Error" })
  }
}


export const getBookings: RequestHandler = async (_, res) => {
  const bookings = await prisma.booking.findMany({});

  res.json(bookings);
}

export const getBookingById: RequestHandler<Params> = async (req, res) => {
  const id = req.params.id;

  const booking = await bookingsService.getBookingById(id);

  if (!booking) {
    res.status(404).json({ message: "Booking not found" })
    return;
  }
  res.json(booking);
};

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
