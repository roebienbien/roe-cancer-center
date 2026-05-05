import { prisma } from "../../lib/prisma";

export function createAppointment(userId: string, date: Date) {
  return prisma.appointment.create({
    data: {
      scheduleAt: date,
      user: {
        connect: {
          id: userId,
        }
      }
    }
  })
}

// export function getBookingById(id: string) {
//   return prisma.booking.findUnique({
//     where: { id },
//     include: {
//       user: true,
//     }
//   })
// }
//
