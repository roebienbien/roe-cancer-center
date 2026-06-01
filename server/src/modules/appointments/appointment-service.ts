import { create } from "node:domain";
import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";
import { AppointmentStatus } from "@prisma/client";

const appointmentInclude = {
  patient: {
    select: {
      firstName: true,
    },
  },
};

export async function createAppointment(
  patientId: string,
  doctorSlotId: string,
) {
  return prisma.$transaction(async (tx) => {
    const doctorSlot = await tx.doctorSlot.findUnique({
      where: {
        id: doctorSlotId,
      },
      include: { slot: true, appointments: true },
    });

    if (!doctorSlot) throw createError("Doctor slot not found", 404);

    // if (doctorSlot.slot.startAt < new Date()) {
    //   throw createError("Cannot book pas slots", 400);
    // }

    if (doctorSlot.appointments.length >= doctorSlot.slot.capacity) {
      throw createError("Slot is fully booked", 400);
    }

    // optional: prevent duplicate booking by same patient
    const existing = await tx.appointment.findFirst({
      where: {
        patientId,
        doctorSlotId,
      },
    });
    if (existing) throw createError("Already booked this slot", 409);

    return tx.appointment.create({
      data: {
        patientId,
        doctorSlotId,
      },
    });
  });
}

export async function getMyAppointments(userId: string) {
  const patient = await prisma.patient.findUnique({
    where: { userId },
  });

  if (!patient) throw createError("Patient not found", 404);

  const appointments = await prisma.appointment.findMany({
    where: {
      patientId: patient.id,
    },
    include: {
      doctorSlot: {
        include: {
          doctor: true,
          slot: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return appointments.map((appointment) => ({
    id: appointment.id,

    status: appointment.status,
    type: appointment.type,

    doctorName: `Dr. ${appointment.doctorSlot.doctor.firstName} ${appointment.doctorSlot.doctor.lastName}`,

    specialization: appointment.doctorSlot.doctor.specialization,

    startAt: appointment.doctorSlot.slot.startAt,
    endAt: appointment.doctorSlot.slot.endAt,
  }));
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

// export async function updateAppointmentStatus(
//   appointmentId: string,
//   doctorUserId: string,
//   status: AppointmentStatus,
// ) {
//   // get doctor profile
//   const doctor = await prisma.doctor.findUnique({
//     where: { userId: doctorUserId },
//   });
//
//   if (!doctor) {
//     throw createError("Doctor not found", 404);
//   }
//
//   // get appointmnet
//   const appointment = await getAppointmentById(appointmentId);
//
//   if (appointment.status !== "PENDING") {
//     throw createError("Appointment already processed", 400);
//   }
//
//   //  assign doctor if not yet assigned
//   if (!appointment.doctorId) {
//     return prisma.appointment.update({
//       where: { id: appointmentId },
//       data: {
//         doctorId: doctor.id,
//         status,
//       },
//     });
//   }
//
//   // ensure doctor owns the appointment
//   if (appointment.doctorId !== doctor.id)
//     throw createError("Not authorized for this appointment", 403);
//
//   // update status
//   return prisma.appointment.update({
//     where: { id: appointmentId },
//     data: { status },
//   });
// }
