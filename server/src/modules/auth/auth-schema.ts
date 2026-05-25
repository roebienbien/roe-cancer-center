import { z } from "zod";

export const registerUserSchema = z.object({
  body: z.object({
    email: z.email("email is invalid").min(1, "email is required"),
    password: z
      .string()
      .min(8, "password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
  }),
});

export type RegisterUserInput = z.infer<typeof registerUserSchema>["body"];
