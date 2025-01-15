import { ErrorMessage } from '@hookform/error-message';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  id: string;
  label: string;
  options: string[];
  register: UseFormRegister<any>; //replace any with schema
  errors?: any;
};

const RadioButton = ({ id, label, options, register, errors }: Props) => {
  return (
    <div className='mb-4'>
      <label className='block'>{label}</label>
      <div className='flex gap-4'>
        {options.map((option) => (
          <label key={option}>
            <input {...register(id)} type='radio' value={option} className='mr-2' />
            {option}
          </label>
        ))}
      </div>
      <ErrorMessage errors={errors} name={id} render={({ message }) => <span className='text-xs text-red-500'>{message}</span>} />
    </div>
  );
};
export default RadioButton;
