import { RegisterFormInput } from '@/features/auth/schemas/auth-schema';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

const years = Array.from(
  {
    length: new Date().getFullYear() - 1900 + 1,
  },
  (_, i) => new Date().getFullYear() - i,
);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const day = Array.from({ length: 31 }, (_, i) => i + 1);

type Props = {
  register: UseFormRegister<RegisterFormInput>;
  errors?: FieldErrors<RegisterFormInput>;
};

const BirthDateSelect = ({ register, errors }: Props) => {
  return (
    <div>
      <select {...register('birthYear', { valueAsNumber: true })}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <select {...register('birthMonth', { valueAsNumber: true })}>
        {months.map((month, index) => (
          <option key={month} value={index + 1}>
            {month}
          </option>
        ))}
      </select>
      <select {...register('birthDay', { valueAsNumber: true })}>
        {day.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BirthDateSelect;
