import { prisma } from "../../lib/prisma";

export function createBooking(userId: string, date: string) {
  return prisma.booking.create({
    data: {
      date: new Date(date),
      user: {
        connect: {
          id: userId,
        }
      }
    }
  })
}

export function getBookingById(id: string) {
  return prisma.booking.findUnique({
    where: { id },
    include: {
      user: true,
    }
  })
}

