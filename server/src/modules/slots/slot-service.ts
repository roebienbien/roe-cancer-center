import { prisma } from "../../lib/prisma";

export async function createSlot(data: {
  startAt: Date;
  endAt: Date;
  capacity?: number;
}) {
  return prisma.slot.create({
    data: {
      startAt: data.startAt,
      endAt: data.endAt,
      ...(data.capacity && { capacity: data.capacity }), //optional capacity
    },
  });
}

export async function getAvailableSlots() {
  const slots = await prisma.slot.findMany({
    include: {
      assignments: {
        include: {
          doctor: true,
          _count: {
            select: {
              appointments: true,
            },
          },
        },
      },
    },
  });

  return slots.filter((slot) => {
    const totalAppointments = slot.assignments.reduce(
      (sum, ds) => sum + ds._count.appointments,
      0,
    );
    return totalAppointments < slot.capacity;
  });
}

export async function getSlotById(id: string) {
  return prisma.slot.findUnique({
    where: { id: id },
  });
}

// export async function getDoctorSlots(doctorId: string) {
//   return prisma.slot.findMany({
//     where: { doctorId },
//     orderBy: { startAt: "asc" },
//     include: { appointments: true },
//   });
// }

//implement later
// export async function getSlotsByDate(
//   doctorId: string,
//   from: Date,
//   to: Date
// ) {
//   return prisma.slot.findMany({
//     where: {
//       doctorId,
//       startAt: {
//         gte: from,
//         lte: to,
//       },
//     },
//     orderBy: { startAt: "asc" },
//   });
// }
