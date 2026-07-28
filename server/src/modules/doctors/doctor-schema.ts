import { z } from "zod";

const registerDoctorSchema = z.object({
  specialization: z.string().min(1, "specialization is required"),
  licenseNumber: z.string().min(1, "licenseNumber is required"),
});

export type RgisterDoctorInput = z.infer<typeof registerDoctorSchema>;
