import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";
import { CreateDoctorInput } from "./doctor-schema";

export async function createDoctor(userId: string, data: CreateDoctorInput) {
  const existing = await prisma.doctor.findUnique({
    where: { userId },
  });

  if (existing) throw createError("Doctor profile already exists", 409);

  const doctor = await prisma.doctor.create({
    data: {
      userId,
      lastName: data.lastName,
      firstName: data.firstName,
      middleName: data.middleName,
      // birthDate: new Date(data.birthDate),
      // sex: data.sex,
      phone: data.phone,
      specialization: data.specialization,
    },
  });
}
