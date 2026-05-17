import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";
import { CreateDoctorInput } from "./doctor-schema";

export async function createDoctor(userId: string, data: CreateDoctorInput) {
  return prisma.$transaction(async (tx) => {
    const existing = await prisma.doctor.findUnique({
      where: { userId },
    });

    if (existing) throw createError("Doctor profile already exists", 409);

    const doctor = await tx.doctor.create({
      data: {
        userId,
        lastName: data.lastName,
        firstName: data.firstName,
        middleName: data.middleName,
        phone: data.phone,
        specialization: data.specialization,
        // birthDate: new Date(data.birthDate),
        // sex: data.sex,
      },
    });

    await tx.user.update({
      where: {
        id: userId,
      },
      data: {
        role: "DOCTOR",
      },
    });
    return doctor;
  });
}
