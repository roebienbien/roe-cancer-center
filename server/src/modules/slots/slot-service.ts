import { prisma } from "../../lib/prisma";

export async function createSlot(data: {
  startAt: Date;
  endAt: Date;
  capacity: number;
}) {
  return prisma.slot.create({
    data: {
      startAt: data.startAt,
      endAt: data.endAt,
      capacity: data.capacity,
    },
  });
}
//
// export async function getAvaialbleSlots() {
//   const slot = await prisma.slot.findMany({
//     include: {
//       doctor: true,
//       _count: {
//         select: {
//           appointments: true,
//         },
//       },
//     },
//   });
//
//   return slot.filter((slot) => slot._count.appointments < slot.capacity);
// }

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
