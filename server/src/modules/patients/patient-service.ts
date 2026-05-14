import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";
import { CreatePatientInput } from "./patient-schema";

export async function createPatientProfile(
  userId: string,
  data: CreatePatientInput,
) {
  const existing = await prisma.patient.findUnique({
    where: { userId },
  });

  if (existing) {
    throw createError("Patient profile already exists", 409);
  }

  return prisma.patient.create({
    data: {
      userId,
      firstName: data.firstName,
      lastName: data.lastName,
      middleName: data.middleName,
      birthDate: new Date(data.birthDate),
      sex: data.sex,
      phone: data.phone,
      address: data.address,
      notes: data.notes,
    },
  });
}

export async function getAllPatients() {
  return await prisma.patient.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getPatientById(userId: string) {
  const patient = await prisma.patient.findUnique({
    where: {
      userId,
    },
    select: {
      id: true,
      user: true,
      appointments: true,
    },
  });

  if (!patient) {
    throw createError("Patient not found", 404);
  }
  return patient;
}

export async function getPatientByUserId(userId: string) {
  const patient = await prisma.patient.findUnique({
    where: { userId },
  });

  if (!patient) throw createError("Patient not found", 404);

  return patient;
}
