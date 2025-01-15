import DatePicker1 from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
};

const DatePicker = ({ selectedDate, onDateChange }: Props) => {
  console.log(selectedDate);
  return <DatePicker1 selected={selectedDate} onChange={onDateChange} showIcon className='cursor-pointer text-center' />;
};
export default DatePicker;
