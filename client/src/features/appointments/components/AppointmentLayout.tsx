import { Outlet } from 'react-router';
import { Button } from '@/components/primitives/button/Button';
import Text from '@/components/primitives/Text';

const AppointmentLayout = () => {
  return (
    <div className='p-8'>
      <div className='flex min-h-screen flex-col rounded-xl border border-gray-400 p-6'>
        <div className='flex justify-between'>
          <Text as='h1' variant='h1'>
            Appointments
          </Text>
          <Button to='new'>Make an Appointment</Button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AppointmentLayout;
