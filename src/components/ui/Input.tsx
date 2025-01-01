import { twMerge } from 'tailwind-merge';

type Props = {
  id?: string;
  label: string;
  type?: 'text' | 'email' | 'number' | 'password' | 'submit'; //default: text
  className?: string;
  placeholder?: string;
  value?: string;
};

const Input = ({ type = 'text', className, label, id, placeholder, value }: Props) => {
  return (
    <div>
      <span>{label}</span>
      <input id={id} value={value} type={type} placeholder={placeholder} className={twMerge(`${className}`)} />
    </div>
  );
};

export default Input;
