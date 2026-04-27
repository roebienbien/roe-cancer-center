import { Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';



export const getBookings = async (_: Request, res: Response, next: NextFunction): RequestHandler => {
  const bookings = await prisma.booking.findMany({});

  res.json(bookings);
};

