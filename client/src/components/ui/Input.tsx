import { ErrorMessage } from '@hookform/error-message';
import { UseFormRegister } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type Props = {
  id: string;
  label?: string;
  // type?: 'text' | 'email' | 'number' | 'password' | 'submit'; //default: text
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  register: UseFormRegister<any>; //replace any with schema
  // errors?: FieldError | undefined;
  errors?: any;
};

const Input = ({ type = 'text', className, label, id, placeholder, value, register, errors }: Props) => {
  return (
    <div className='flex flex-col gap-y-2'>
      <div className='flex items-center gap-x-4'>
        {label && <span className='shrink-0'>{label}</span>}
        <div className='flex w-full flex-grow flex-col'>
          <input
            {...register(id)}
            id={id}
            value={value}
            type={type}
            placeholder={placeholder}
            className={twMerge(`rounded border border-gray-400 p-2 uppercase ${className}`)}
          />
        </div>
      </div>
      <ErrorMessage errors={errors} name={id} render={({ message }) => <span className='text-xs text-red-500'>{message}</span>} />

      {/* {errors[id] && <span className='w-full text-right text-xs text-red-500'>{errors[id]?.message as string}</span>} */}
      {/* {errors && <span className='w-full text-right text-xs text-red-500'>{errors.message}</span>} */}
    </div>
  );
};

export default Input;
