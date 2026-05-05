import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";

export async function getPatientById(userId: string) {
  const patient = await prisma.patient.findUnique({
    where: {
      userId
    },
    select: {
      id: true,
      user: true,
      appointments: true,
    }
  })

  if (!patient) {
    throw createError("Patient not found", 404)
  }
  return patient
}

export async function getPatientByUserId(userId: string) {
  const patient = await prisma.patient.findUnique({
    where: { userId }
  })

  if (!patient) throw createError("Patient not fount", 404)

  return patient;
}
