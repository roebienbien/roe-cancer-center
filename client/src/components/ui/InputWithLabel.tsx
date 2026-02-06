import { FieldError, UseFormRegister } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type Props = {
  id: string;
  label?: string;
  type?: 'text' | 'email' | 'number' | 'password' | 'submit'; //default: text
  className?: string;
  placeholder?: string;
  value?: string;
  register: UseFormRegister<any>; //replace any with schema
  errors?: FieldError | undefined;
};

const InputWithLabel = ({ type = 'text', className, label, id, placeholder, value, register, errors }: Props) => {
  // const { register, errors } = useFormContext();
  return (
    <div className='flex flex-col gap-y-2'>
      {label && <span className='shrink-0'>{label}</span>}
      <div className='flex items-center gap-x-4'>
        <div className='flex w-full flex-grow flex-col'>
          <input
            {...register(id)}
            id={id}
            value={value}
            type={type}
            placeholder={placeholder}
            className={twMerge(`border border-gray-400 p-2 ${className}`)}
          />
        </div>
      </div>
      {/* {errors[id] && <span className='w-full text-right text-xs text-red-500'>{errors[id]?.message}</span>} */}
      {errors && <span className='w-full text-right text-xs text-red-500'>{errors.message}</span>}
    </div>
  );
};

export default InputWithLabel;
