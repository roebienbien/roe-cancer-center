import { FieldError, UseFormRegister } from 'react-hook-form';

type TOptions = {
  value: string;
  text: string;
};

interface Props {
  id: string;
  options: TOptions[];
  selectedValue: string;
  onChange: (value: string) => void;
  placeholder: string;
  register: UseFormRegister<any>;
  errors: FieldError | undefined;
  label?: string;
}

const Dropdown = ({ id, options, placeholder, register, errors, label }: Props) => {
  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   onChange(event.target.value);
  // };
  return (
    <div className='flex'>
      <div className='flex w-full items-center gap-x-4'>
        {label && <label>{label}</label>}
        <select {...register(id)} className='p-2'>
          <option value='' disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value} className=''>
              {option.text}
            </option>
          ))}
        </select>
        {errors && <span className='text-left text-sm text-red-500'>{errors.message}</span>}
      </div>
    </div>
  );
};

export default Dropdown;
