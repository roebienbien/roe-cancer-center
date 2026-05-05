import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";


export async function createAppointment(
  patientId: string,
  startAt: Date,
  endAt: Date
) {
  return prisma.$transaction(async (tx) => {
    // count overlapping appointments
    const overlappingCount = await tx.appointment.count({
      where: {
        AND: [
          { startAt: { lt: endAt } },
          { endAt: { gt: startAt } },
        ],
        status: { in: ["PENDING", "APPROVED"] },
      },
    });

    const MAX_CAPACITY = 3;

    if (overlappingCount >= MAX_CAPACITY) {
      throw createError("Time slot full", 409);
    }

    return tx.appointment.create({
      data: {
        patientId,
        startAt,
        endAt,
      },
    });
  });
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
