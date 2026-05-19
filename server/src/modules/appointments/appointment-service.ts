import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";
import { AppointmentStatus } from "@prisma/client";

// const patientPreviewSelect = {
//   select: {
//     firstName: true,
//   },
// };

const appointmentInclude = {
  patient: {
    select: {
      firstName: true,
    },
  },
};

const MAX_CAPACITY = 5;
export async function createAppointment(patientId: string, slotId: string) {
  return prisma.$transaction(async (tx) => {
    const slot = await tx.slot.findUnique({
      where: {
        id: slotId,
        // status: { in: ["PENDING", "APPROVED"] },
      },
      include: { appointments: true },
    });

    if (!slot) {
      throw createError("Slot not found", 404);
    }

    if (slot.startAt < new Date()) {
      throw createError("Cannot book past appointments", 400);
    }

    return tx.appointment.create({
      data: {
        patientId,
        slotId,
      },
    });
  });
}

export async function getAllAppointments() {
  return await prisma.appointment.findMany({
    // where: { id: appointmentId },
    include: appointmentInclude,
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function getAppointmentById(id: string) {
  const appointment = await prisma.appointment.findUnique({
    where: { id },
    include: appointmentInclude,
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
      createdAt: "asc",
    },
  });
}

export async function updateAppointmentStatus(
  appointmentId: string,
  doctorUserId: string,
  status: AppointmentStatus,
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
    throw createError("Appointment already processed", 400);
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
