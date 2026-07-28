import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";
import { RgisterDoctorInput } from "./doctor-schema";

export async function registerDoctor(userId: string, data: RgisterDoctorInput) {
  return prisma.$transaction(async (tx) => {
    const existing = await tx.doctor.findUnique({
      where: { userId },
    });

    if (existing) throw createError("Doctor profile already exists", 409);

    const doctor = await tx.doctor.create({
      data: {
        userId,
        specialization: data.specialization,
        licenseNumber: data.licenseNumber,
        verification: "PENDING",
      },
    });

    // await tx.user.update({
    //   where: {
    //     id: userId,
    //   },
    //   data: {
    //     role: "DOCTOR",
    //   },
    // });

    //Make this work later on
    await tx.auditLog.create({
      data: {
        action: "DOCTOR_REGISTERED",
        entity: "Doctor",
        entityId: doctor.id,
        actorId: userId,
        metadata: {
          licenseNumber: doctor.licenseNumber,
        },
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

export async function verifyDoctor(
  doctorId: string,
  adminId: string,
  decision: "VERIFIED" | "REJECTED",
  rejectionReason: string,
) {
  return prisma.$transaction(async (tx) => {
    const existing = await tx.doctor.findUnique({ where: { id: doctorId } });
    if (!existing) throw createError("Doctor not found", 404);
    if (existing.verification !== "PENDING") {
      throw createError("Doctor has already been reviewed", 409);
    }

    const doctor = await tx.doctor.update({
      where: { id: doctorId },
      data: {
        verification: decision,
        verifiedAt: decision === "VERIFIED" ? new Date() : null,
        verifiedById: adminId,
        ...(decision === "REJECTED" && { rejectionReason }),
      },
    });

    if (decision === "VERIFIED") {
      await tx.user.update({
        where: { id: doctor.userId },
        data: { role: "DOCTOR" },
      });
    }

    // TODO: add later
    // await tx.auditLog.create({
    //   data: {
    //     action: decision === 'VERIFIED' ? 'DOCTOR_VERIFIED' : 'DOCTOR_REJECETED',
    //     entity: 'Doctor',
    //     entityId: doctor.id,
    //     actorId: adminId,
    //     metadata: {rejectionReason},
    //   }
    // })

    return doctor;
  });
}
