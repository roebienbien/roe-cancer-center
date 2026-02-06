import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  console.log(selectedDate);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div className='flex items-center gap-4'>
      <span className=''>Choose a date</span>
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        filterDate={isWeekday}
        fixedHeight
        showIcon
        className='cursor-pointer text-center'
      />
    </div>
  );
};
export default DatePicker;
