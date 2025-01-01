import React from 'react';

type TOptions = {
  value: string;
  text: string;
};

interface Props {
  options: TOptions[];
  selectedValue: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const Dropdown = ({ options, selectedValue, onChange, placeholder }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };
  return (
    <select value={selectedValue} onChange={handleChange}>
      <option value='' disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option value={option.value} key={index} className=''>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
