import { Router, Response, } from 'express'
import { authenticate, AuthRequest } from '../middleware/authenticate';
import { authorize } from '../middleware/authorize';
import { prisma } from '../lib/prisma';
import { createBookingSchema } from '../schema/booking-schema';


const router = Router();

router.post(
  "/",
  authenticate,
  authorize("PATIENT"),
  async (req: AuthRequest, res: Response) => {
    try {
      const parsed = createBookingSchema.safeParse(req.body);

      if (!parsed.success) {
        return res.status(400).json({
          message: "Validation Error",
          // errors.parsed.error.flatten(),
        })
      }

      const { date } = parsed.data;

      const booking = await prisma.booking.create({
        data: {
          date: new Date(date),
          user: {
            connect: {
              id: req.user!.userId,
            }
          }
        },
      });

      return res.json(booking);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

// router.get("/", async (req: Request, res: Response) => {
//   const bookings = await prisma.booking.findMany({
//     include: {
//       user: true
//     }
//   });
//
//   res.json(bookings)
// })

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

