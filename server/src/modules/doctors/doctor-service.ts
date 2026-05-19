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

export async function getAllDoctors() {
  return await prisma.doctor.findMany();
}

export async function getDoctorById(id: string) {
  return await prisma.doctor.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getDoctorByUserId(id: string) {
  return await prisma.doctor.findUnique({
    where: {
      userId: id,
    },
  });
}
