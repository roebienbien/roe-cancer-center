import { getDoctorById, getDoctorByUserId } from "../doctors/doctor-service";
import { createError } from "../../utils/app-error";
import { getSlotById } from "../slots/slot-service";
import { prisma } from "../../lib/prisma";
import { logger } from "../../utils/logger";

// Doctor-slot should:
// - assigning doctors
// - unassigning doctors
// - doctor schedules
// - allocation lookup

// Doctor-slot should not:
// - slot generation
// - appointment booking
// - doctor profile creation

export async function assignDoctorToSlot(doctorId: string, slotId: string) {
  // Parallel DB calls with promise.all instead of sequential
  const [doctor, slot] = await Promise.all([
    prisma.doctor.findUnique({ where: { id: doctorId } }),
    prisma.slot.findUnique({ where: { id: slotId } }),
  ]);

  if (!doctor) throw createError("Doctor not found", 404);
  if (!slot) throw createError("Slot not found", 404);

  const existing = await prisma.doctorSlot.findUnique({
    where: { doctorId_slotId: { doctorId, slotId } },
  });

  if (existing) throw createError("Doctor alread assigned to this slot", 409);

  return prisma.doctorSlot.create({
    data: {
      doctorId,
      slotId,
    },
  });
}

export async function getAvailableDoctorSlots() {
  const doctorSlots = await prisma.doctorSlot.findMany({
    where: {
      slot: {
        startAt: {
          gt: new Date(),
        },
      },
    },
    include: {
      doctor: true,
      slot: true,
      _count: {
        select: {
          appointments: true,
        },
      },
    },
  });

  doctorSlots.forEach((ds) => {
    console.log("Slot start:", ds.slot.startAt);
  });

  return doctorSlots
    .filter((ds) => ds._count.appointments < ds.slot.capacity)
    .map((ds) => ({
      id: ds.id,
      doctor: {
        id: ds.doctor.id,
        name: `Dr. ${ds.doctor.firstName} ${ds.doctor.lastName}`,
        specialization: ds.doctor.specialization,
      },
      startAt: ds.slot.startAt,
      endAt: ds.slot.endAt,
      booked: ds._count.appointments,
      capacity: ds.slot.capacity,
    }));
}

export async function getDoctorSlotById(id: string) {
  const slot = await prisma.doctorSlot.findUnique({
    where: { id },
    include: {
      doctor: true,
      slot: true,
      _count: {
        select: {
          appointments: true,
        },
      },
    },
  });

  if (!slot) throw createError("Slot not found", 404);

  return slot;
}
