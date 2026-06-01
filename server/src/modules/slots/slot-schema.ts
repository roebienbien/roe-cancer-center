import { z } from "zod";

export const createSlotSchema = z.object({
  body: z.object({
    startAt: z.coerce.date(),
    endAt: z.coerce.date(),
    capacity: z.number(),
  }),
});

export type CreateSlotInput = z.infer<typeof createSlotSchema>["body"];
