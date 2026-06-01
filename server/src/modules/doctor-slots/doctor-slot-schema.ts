import { z } from "zod";
export const assignDoctorToSlotSchema = z.object({
  params: z.object({
    doctorId: z.uuid(),
    slotId: z.uuid(),
  }),
});

export type assignDoctorToSlotInput = z.infer<
  typeof assignDoctorToSlotSchema
>["params"];
