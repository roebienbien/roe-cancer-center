import { z } from 'zod';

const ChemoSchema = z.object({
  lastName: z.string({ required_error: 'required' }).min(1, 'field is required'),
  middleName: z.string({ required_error: 'required' }).min(1, 'field is required'),
  firstName: z.string({ required_error: 'required' }).min(1, 'field is required'),
  email: z.string({ required_error: 'required' }).email('please enter a valid email').min(1, 'field is required'),
  sex: z.string({ required_error: 'required' }).min(1, 'field is required'),
  mobileNumber: z.string({ required_error: 'required' }).min(1, 'field is required').max(11, 'max number is eleven'),
});

export default ChemoSchema;
export type FormFields = z.infer<typeof ChemoSchema>;
