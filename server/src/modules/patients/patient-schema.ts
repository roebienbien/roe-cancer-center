import { z } from "zod";

export const patientBodySchema = z.object({
  sex: z.enum(["MALE", "FEMALE"]),
  barangay: z.string().min(1, "barangay is required"),
  street: z.string().min(1, "street is required"),
  region: z.string().min(1, "region is required"),
  city: z.string().min(1, "city is required"),
  province: z.string().min(1, "province is required"),
  postalCode: z.string().min(1, "postalCode is required"),
  country: z.string().min(1, "country is required"),

  notes: z.string().optional(),
});

export const registerPatientSchema = z.object({
  body: patientBodySchema,
});

export const updatePatientSchema = z.object({
  body: patientBodySchema.partial(),
});

export type RegisterPatientInput = z.infer<
  typeof registerPatientSchema
>["body"];
export type UpdatePatientInput = z.infer<typeof updatePatientSchema>["body"];
