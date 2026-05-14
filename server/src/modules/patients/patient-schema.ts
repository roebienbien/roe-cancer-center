import { z } from "zod";

export const CreatePatientSchema = z.object({
  body: z.object({
    lastName: z.string().min(1, "Last name is required"),
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().min(1, "Middle name is required"),
    sex: z.string().min(1, "Sex is required"),
    birthDate: z.string().min(1, "BirtDate is required"),
    phone: z.string().min(1, "Phone is required"),
    address: z.string().min(1, "Address is required"), // split into brgy, street
    notes: z.string().optional(),
  }),
});

export type CreatePatientInput = z.infer<typeof CreatePatientSchema>["body"];
