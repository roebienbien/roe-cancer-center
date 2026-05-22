import { getDoctorById, getDoctorByUserId } from "../doctors/doctor-service";
import { createError } from "../../utils/app-error";
import { getSlotById } from "../slots/slot-service";
import { prisma } from "../../lib/prisma";

// Doctor-slot should:
// - assigning doctors
// - unassigning doctors
// - doctor schedules
// - allocation lookup

// Doctor-slot should not:
// - slot generation
// - appointment booking
// - doctor profile creation
//

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
      appointments: true,
    },
  });

  return doctorSlots.map((doctorSlot) => {
    const booked = doctorSlot.appointments.length;
    const capacity = doctorSlot.slot.capacity;

    return {
      id: doctorSlot.id,

      doctorName: `Dr. ${doctorSlot.doctor.firstName}`,
      doctorfname: "hello",

      startAt: doctorSlot.slot.startAt,
      endAt: doctorSlot.slot.endAt,

      booked,
      capacity,

      available: booked < capacity,
    };
  });
}
export async function assignDoctorToSlot(doctorId: string, slotId: string) {
  // const doctor = await getDoctorByUserId(doctorId);
  const doctor = await prisma.doctor.findUnique({
    where: { id: doctorId },
  });
  if (!doctor) throw createError("Doctor not found", 404);

  // const slot = await getSlotById(slotId);
  const slot = await prisma.slot.findUnique({
    where: { id: slotId },
  });
  if (!slot) throw createError("Slot not found", 404);

  return prisma.doctorSlot.create({
    data: {
      doctorId,
      slotId,
    },
  });
}
