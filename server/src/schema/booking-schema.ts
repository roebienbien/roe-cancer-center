import { z } from "zod";

export const createBookingSchema = z.object({
  date: z.iso.datetime()
})
