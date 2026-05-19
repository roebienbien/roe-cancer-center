import { z } from "zod";
export const assignDoctorSchema = z.object({
  body: z.object({
    doctorId: z.uuid(),
    slotId: z.uuid(),
  }),
});
