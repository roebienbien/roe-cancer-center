import { ErrorMessage } from '@hookform/error-message';
import { UseFormRegister } from 'react-hook-form';

type TOptions = {
  value: string;
  text: string;
};

interface Props {
  id: string;
  options: TOptions[];
  placeholder?: string;
  register: UseFormRegister<any>;
  errors: any; //change any
  label?: string;
}

const Dropdown = ({ id, options, placeholder, register, errors, label }: Props) => {
  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   onChange(event.target.value);
  // };
  return (
    <div key={id} className='mb-4'>
      <label className='block'>{label}</label>
      <select {...register(id)} id={id} className='w-full rounded border bg-white p-2'>
        <option value='' disabled defaultValue={''}>
          {placeholder || 'Select an option'}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <ErrorMessage errors={errors} name={id} render={({ message }) => <span className='text-xs text-red-500'>{message}</span>} />
    </div>
  );
};

export default Dropdown;
