import { RegisterFormInput } from '@/features/auth/schemas/auth-schema';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import Text from '@/components/primitives/Text';

const years = Array.from(
  {
    length: new Date().getFullYear() - 1900 + 1,
  },
  (_, i) => new Date().getFullYear() - i,
);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

type Props = {
  register: UseFormRegister<RegisterFormInput>;
  errors?: FieldErrors<RegisterFormInput>;
  watch: UseFormWatch<RegisterFormInput>;
};

const BirthDateSelect = ({ register, watch, errors }: Props) => {
  const birthYear = watch('birthYear');
  const birthMonth = watch('birthMonth');

  const daysInMonth = birthYear && birthMonth ? new Date(birthYear, birthMonth, 0).getDate() : 31;
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const fields = [
    {
      name: 'birthYear',
      placeholder: 'Year',
      options: years,
    },
    {
      name: 'birthMonth',
      placeholder: 'Month',
      options: months,
    },
    {
      name: 'birthDay',
      placeholder: 'Day',
      options: days,
    },
  ] as const;

  return (
    <div>
      <Text as='label' className='font-semibold'>
        Birthdate
      </Text>
      <div className='grid grid-cols-3 gap-3'>
        {fields.map(({ name, placeholder, options }) => {
          const fieldError = errors?.[name]?.message as string | undefined;
          return (
            <div key={name} className='flex flex-col gap-1'>
              <select
                defaultValue=''
                aria-invalid={!!fieldError}
                {...register(name, { setValueAs: (value) => (value === '' ? undefined : Number(value)) })}
                className='border-border h-10 cursor-pointer rounded-md border bg-background px-3 text-sm outline-none transition focus:border-primary'
              >
                <option value='' disabled>
                  {placeholder}
                </option>
                {options.map((option, index) => (
                  <option key={option} value={name === 'birthMonth' ? index + 1 : option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldError && <Text className='text-xs text-danger'>{fieldError}</Text>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BirthDateSelect;
