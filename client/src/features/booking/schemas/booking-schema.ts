import z from "zod"

export const bookingSchema = z.object({
  patientName: z.string().min(1, "Name is required"),
  email: z.email({ message: 'email invalid' }).min(1, 'email is required'),
  doctorId: z.string(),
  date: z.string(),
  time: z.string(),
})


export type BookingFormData = z.infer<typeof bookingSchema>
