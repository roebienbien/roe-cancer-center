import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

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
    <div className="bg-blue-500">
      <div className=''>
        {label && (
          <label htmlFor={id} className=''>
            {label}
          </label>
        )}
        <input
          {...register(id as any)}
          id={id}
          type={type}
          placeholder={placeholder}
          className="bg-red-200"
        />

      </div>

      <ErrorMessage
        errors={errors}
        name={id as any}
        render={({ message }) => (
          <span className=''>{message}</span>
        )}
      />
    </div>
  );
};

export default Input;
