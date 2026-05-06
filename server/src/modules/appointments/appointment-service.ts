import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";

export async function createAppointment(
  patientId: string,
  startAt: Date,
  endAt: Date,
) {
  return prisma.$transaction(async (tx) => {
    // count overlapping appointments
    const overlappingCount = await tx.appointment.count({
      where: {
        AND: [{ startAt: { lt: endAt } }, { endAt: { gt: startAt } }],
        status: { in: ["PENDING", "APPROVED"] },
      },
    });

    const MAX_CAPACITY = 5;

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

export async function getAllAppointments() {
  return await prisma.appointment.findMany({
    // where: { id: appointmentId },
    include: {
      patient: {
        select: {
          firstName: true,
        },
      },
    },
  });
}

export async function getAppointmentById(id: string) {
  const appointment = await prisma.appointment.findUnique({
    where: { id },
    include: {
      patient: {
        select: {
          firstName: true,
        },
      },
    },
  });

  if (!appointment) {
    throw createError("Appointment not found", 404);
  }

  return appointment;
}

export async function getAppointmentsByUserId(userId: string) {
  const patient = await prisma.patient.findUnique({
    where: { userId },
  });

  if (!patient) throw createError("Patient profile not found", 404);

  return prisma.appointment.findMany({
    where: {
      patientId: patient.id,
    },
    orderBy: {
      startAt: "asc",
    },
  });
}

export async function updateAppointmentStatus(
  appointmentId: string,
  doctorUserId: string,
  status: "APPROVED" | "REJECTED",
) {
  // get doctor profile
  const doctor = await prisma.doctor.findUnique({
    where: { userId: doctorUserId },
  });

  if (!doctor) {
    throw createError("Doctor not found", 404);
  }

  // get appointmnet
  const appointment = await getAppointmentById(appointmentId);

  if (appointment.status !== "PENDING") {
    throw createError("Appointment alread processed", 400);
  }

  //  assign doctor if not yet assigned
  if (!appointment.doctorId) {
    return prisma.appointment.update({
      where: { id: appointmentId },
      data: {
        doctorId: doctor.id,
        status,
      },
    });
  }

  // ensure doctor owns the appointment
  if (appointment.doctorId !== doctor.id)
    throw createError("Not authorized for this appointment", 403);

  // update status
  return prisma.appointment.update({
    where: { id: appointmentId },
    data: { status },
  });
}
