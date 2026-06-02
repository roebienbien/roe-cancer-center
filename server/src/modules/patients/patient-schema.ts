import { z } from "zod";
import { upperString } from "../../utils/zod-validators";

export const patientBodySchema = z.object({
  lastName: upperString("lastName"),
  firstName: upperString("firstName"),
  middleName: upperString("middleName"),
  // lastName: z.string().min(1, "Last name is required"),
  // firstName: z.string().min(1, "First name is required"),
  // middleName: z.string().min(1, "Middle name is required"),
  sex: z.string().min(1, "Sex is required"),
  birthDate: z.string().min(1, "BirtDate is required"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"), // split into brgy, street
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

// export const registerPatientSchema = z.object({
//   body: z.object({
//     lastName: z.string().min(1, "Last name is required"),
//     firstName: z.string().min(1, "First name is required"),
//     middleName: z.string().min(1, "Middle name is required"),
//     sex: z.string().min(1, "Sex is required"),
//     birthDate: z.string().min(1, "BirtDate is required"),
//     phone: z.string().min(1, "Phone is required"),
//     address: z.string().min(1, "Address is required"), // split into brgy, street
//     notes: z.string().optional(),
//   }),
// });
//
