import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type Props<T extends FieldValues> = {
  id: string;
  label?: string;
  type?: string;
  className?: string;
  labelClassName?: string;
  // placeholder?: string;
  value?: string;
  autoComplete?: 'email' | 'new-password';
  register: UseFormRegister<T>; //replace any with schema
  errors?: FieldErrors<T>;
};

const Input = <T extends FieldValues>({ type = 'text', label, id, autoComplete, register, errors }: Props<T>) => {
  const inputBaseClass = 'border-2 w-full p-1';
  // const placeholder = id.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase());
  const placeholder = id.replace(/([A-Z])/g, ' $1').toUpperCase();
  return (
    <>
      {label && (
        <label htmlFor={id} className='mb-1 block'>
          {label}
        </label>
      )}
      <input {...register(id as any)} id={id} type={type} placeholder={placeholder} className={inputBaseClass} autoComplete={autoComplete} />

      <ErrorMessage errors={errors} name={id as any} render={({ message }) => <span className='text-red-500'>{message}</span>} />
    </>
  );
};

export default Input;
