import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type Props<T extends FieldValues> = {
  id: string;
  label?: string;
  type?: string;
  className?: string;
  labelClassName?: string;
  placeholder?: string;
  value?: string;
  autoComplete?: 'email' | 'new-password';
  register: UseFormRegister<T>; //replace any with schema
  errors?: FieldErrors<T>;
};

const Input = <T extends FieldValues>({ type = 'text', className, label, id, placeholder, autoComplete, register, errors }: Props<T>) => {
  return (
    <div className={twMerge('', className)}>
      <div className='flex flex-col gap-x-1'>
        {label && (
          <label htmlFor={id} className='mb-1 block'>
            {label}
          </label>
        )}
        <input {...register(id as any)} id={id} type={type} placeholder={`Enter ${label}`} className='w-full' autoComplete={autoComplete} />
      </div>

      <ErrorMessage errors={errors} name={id as any} render={({ message }) => <span className='text-red-500'>{message}</span>} />
    </div>
  );
};

export default Input;
