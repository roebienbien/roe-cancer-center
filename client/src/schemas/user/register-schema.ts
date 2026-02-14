import { z } from 'zod';
import { passwordSchema } from './password-schema';

export const registerUserSchema = z
  .object({
    email: z.email('email is invalid').min(1, 'email is required'),
    password: passwordSchema,
    confirmPassword: z.string().min(8, 'confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const registerUserDefaultValues = {
  email: 'test@email.com',
  password: 'Test@123',
  confirmPassword: 'Test@123',
};

export type RegisterUserInput = z.infer<typeof registerUserSchema>;
