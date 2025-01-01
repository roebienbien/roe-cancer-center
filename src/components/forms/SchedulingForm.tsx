import React from 'react';
import Input from '../ui/Input';

const SchedulingForm = () => {
  return (
    <form action=''>
      <Input label={'Email'} className={''} type='email' />
      <Input label={'password'} className={''} type='password' />
    </form>
  );
};

export default SchedulingForm;
