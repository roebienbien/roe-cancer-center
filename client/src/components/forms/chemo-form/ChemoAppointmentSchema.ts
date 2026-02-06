import { z } from 'zod';

const personalDetailsSchema = z.object({
  firstName: z.string({ required_error: 'required' }).min(1, 'First name is required'),
  lastName: z.string({ required_error: 'required' }).min(1, 'Last name is required'),
  middleName: z.string({ required_error: 'required' }).min(1, 'Middle name is required'),
  // height: z.number({ required_error: 'height is required' }).min(1, 'Height is required'),
  sex: z.string({ required_error: 'required' }).min(1, 'sex is required'),
  // sex: z
  //   .enum(['MALE', 'FEMALE'], {
  //     required_error: 'Sex is required',
  //   })
  //   .refine((value) => value !== null && value !== undefined, {
  //     message: 'Sex is required',
  //   })
  height: z
    .string({ required_error: 'Height is required' })
    .min(1, 'Height is required')
    .transform((value) => Number(value))
    .refine((value) => !isNaN(value) && value > 0, {
      message: 'Height must be a positive number',
    }),
  weight: z
    .string({ required_error: 'Weight is required' })
    .min(1, 'Weight must not be empty')
    .transform((value) => Number(value))
    .refine((value) => !isNaN(value) && value > 0, {
      message: 'Weight must be a positive number',
    }),
  chemoType: z.string({ required_error: 'required' }).min(1, 'chemo type is required'),
});

const contactDetailsSchema = z.object({
  email: z.string({ required_error: 'required' }).min(1, 'Email is required').email({ message: 'Enter valid email' }),
  mobileNumber: z.string({ required_error: 'required' }).min(1, 'field is required').max(11, 'max number is eleven'),
});

const familyBackgroundSchema = z.object({
  motherLastName: z.string({ required_error: 'required' }).min(1, `Mother's last name is required`),
  motherFirstName: z.string({ required_error: 'required' }).min(1, `Mother's first name is required`),
  motherMiddleName: z.string({ required_error: 'required' }).min(1, `Mother's name name is required`),
  fatherLastName: z.string({ required_error: 'required' }).min(1, `Father's last name is required`),
  fatherFirstName: z.string({ required_error: 'required' }).min(1, `Father's first name is required`),
  fatherMiddleName: z.string({ required_error: 'required' }).min(1, `Father's name name is required`),
});

// const ChemoSchema = z.object({
//   lastName: z.string({ required_error: 'required' }).min(1, 'field is required'),
//   middleName: z.string({ required_error: 'required' }).min(1, 'field is required'),
//   firstName: z.string({ required_error: 'required' }).min(1, 'field is required'),
//   email: z.string({ required_error: 'required' }).email('please enter a valid email').min(1, 'field is required'),
//   mobileNumber: z.string({ required_error: 'required' }).min(1, 'field is required').max(11, 'max number is eleven'),
//   motherLastName: z.string({ required_error: 'required' }).min(1, `Mother's last name is required`),
//   motherFirstName: z.string({ required_error: 'required' }).min(1, `Mother's first name is required`),
//   motherMiddleName: z.string({ required_error: 'required' }).min(1, `Mother's name name is required`),
//   fatherLastName: z.string({ required_error: 'required' }).min(1, `Father's last name is required`),
//   fatherFirstName: z.string({ required_error: 'required' }).min(1, `Father's first name is required`),
//   fatherMiddleName: z.string({ required_error: 'required' }).min(1, `Father's name name is required`),
// });
const ChemoSchema = personalDetailsSchema.merge(contactDetailsSchema).merge(familyBackgroundSchema);

interface IField {
  id: keyof FormFields;
  label: string;
  type: string;
  placeholder: string;
  options?: string[];
}

export const Steps = [
  {
    title: 'Patient Details',
    schema: personalDetailsSchema,
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'divider', placeholder: '' },
      { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'First Name' },
      { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Last Name' },
      { id: 'middleName', label: 'Middle Name', type: 'text', placeholder: 'Middle Name' },
      { id: 'height', label: 'Middle Name', type: 'number', placeholder: 'Middle Name' },
      { id: 'weight', label: 'Middle Name', type: 'number', placeholder: 'Middle Name' },
      { id: 'sex', label: 'Sex', type: 'radio', options: ['male', 'female'] },
    ] as IField[],
  },
  // {
  //   title: 'Contact Details',
  //   schema: contactDetailsSchema,
  //   fields: [
  //     { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  //     { id: 'mobileNumber', label: 'Mobile Number', type: 'text', placeholder: 'Enter your mobile number' },
  //   ] as IField[],
  // },
  // {
  //   title: 'Family Background',
  //   schema: familyBackgroundSchema,
  //   fields: [
  //     { id: 'motherFirstName', label: `Mother's maiden name`, type: 'text', placeholder: `Mother's maiden name` },
  //     { id: 'motherLastName', label: `Mother's maiden name`, type: 'text', placeholder: `Mother's maiden name` },
  //     { id: 'motherMiddleName', label: `Mother's maiden name`, type: 'text', placeholder: `Mother's maiden name` },
  //     // { id: 'fatherFullName', label: `Father's Full Name`, type: 'divider', placeholder: '' },
  //     { id: 'fatherLastName', label: `Mother's maiden name`, type: 'text', placeholder: `Last name` },
  //     { id: 'fatherFirstName', label: `Mother's maiden name`, type: 'text', placeholder: `First name` },
  //     { id: 'fatherMiddleName', label: `Mother's maiden name`, type: 'text', placeholder: `Middle name` },
  //   ] as IField[],
  // },
] as const; //readonly

export default ChemoSchema;
export type FormFields = z.infer<typeof ChemoSchema>;
