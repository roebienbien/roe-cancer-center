import { z } from "zod";

export const registerDoctorSchema = z.object({
  body: z.object({
    specialization: z.string().min(1, "specialization is required"),
    licenseNumber: z.string().min(1, "licenseNumber is required"),
  }),
});

export const verifyDoctorSchema = z.object({
  params: z.object({ doctorId: z.uuid() }),
  body: z.object({
    decision: z.enum(["VERIFIED", "REJECTED"]),
    rejectionReason: z.string().optional(),
  }),
});

export type RegisterDoctorInput = z.infer<typeof registerDoctorSchema>["body"];
export type VerifyDoctorInput = z.infer<typeof verifyDoctorSchema>["body"];
