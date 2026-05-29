import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";
import { RegisterPatientInput, UpdatePatientInput } from "./patient-schema";

const patientSelect = {
  id: true,
  firstName: true,
  lastName: true,
  middleName: true,
  sex: true,
  birthDate: true,
  phone: true,
  address: true,
  notes: true,
};

export async function updatePatient(userId: string, data: UpdatePatientInput) {
  return prisma.patient.update({
    where: {
      userId,
    },
    data,
  });
}

export async function registerPatient(
  userId: string,
  data: RegisterPatientInput,
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

export async function getPatientById(patientId: string) {
  const patient = await prisma.patient.findUnique({
    where: {
      id: patientId,
    },
    select: patientSelect,
    // select: {
    //   patient
    //   id: true,
    //   user: true,
    //   appointments: true,
    // },
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
