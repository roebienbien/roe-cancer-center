import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";

function normalizeToSlot(date: Date) {
  const slotMinutes = 30;

  const ms = date.getTime();
  const slot = slotMinutes * 60 * 1000;

  return new Date(Math.floor(ms / slot) * slot)
}

export async function createAppointment(userId: string, date: Date) {
  const normalizedDate = normalizeToSlot(date);

  const count = await prisma.appointment.count({
    where: {
      scheduleAt: normalizedDate,
      status: { in: ["PENDING", "APPROVED"] }
    }
  })

  const MAX_CAPACITY = 3; //create this into a proper DB logic later

  if (count >= MAX_CAPACITY) {
    throw createError("Time slot full", 409)
  }


  return prisma.appointment.create({
    data: {
      scheduleAt: normalizedDate,
      user: {
        connect: {
          id: userId,
        }
      }
    }
  })
}

export async function getAppointmentById(id: string) {
  const appointment = await prisma.appointment.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          email: true
        }
      }
    },
  });

  if (!appointment) {
    throw createError("Appointment not found", 404);
  }

  return appointment;
}
