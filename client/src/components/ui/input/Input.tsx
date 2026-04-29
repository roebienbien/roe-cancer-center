import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import './Input.scss'

type Props<T extends FieldValues> = {
  id: string;
  label?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  register: UseFormRegister<T> //replace any with schema
  errors?: FieldErrors<T>;
};

const Input = <T extends FieldValues>({ type = 'text', className, label, id, placeholder, register, errors }: Props<T>) => {
  return (
    <div className='input'>
      <div className='input__wrapper'>
        {label && <span className='input__label'>{label}</span>}
        <input
          {...register(id as any)}
          id={id}
          type={type}
          placeholder={placeholder}
          className={`input__field ${className}`}
        />
      </div>
      <ErrorMessage errors={errors} name={id as any} render={({ message }) => <span className='input__error'>{message}</span>} />

      {/* {errors[id] && <span className='w-full text-right text-xs text-red-500'>{errors[id]?.message as string}</span>} */}
      {/* {errors && <span className='w-full text-right text-xs text-red-500'>{errors.message}</span>} */}
    </div>
  );
};

export default Input;
