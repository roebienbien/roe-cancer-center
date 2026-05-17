import { z } from "zod";

const createDoctorSchema = z.object({
  // body: z.object({
  // userId: z.uuid(),
  lastName: z.string().min(1, "last name is required"),
  firstName: z.string().min(1, "first name is required"),
  middleName: z.string().min(1, "middle name is required"),
  specialization: z.string().min(1, "specialization name is required"),
  phone: z.string().min(1, "phone name is required"),

  // already have email in user creation
  // email: z.string().min(1, "Middle name is required"),
});
// })

export type CreateDoctorInput = z.infer<typeof createDoctorSchema>;
