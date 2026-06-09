import AppointmentCard from './AppointmentCard';
import { Appointment } from '../api/appointment-api';
import { Button } from '@/components/primitives/button/Button';
import Text from '@/components/primitives/Text';

type Props = {
  title: string;
  emptyMessage: string;
  appointments: Appointment[];
};

const AppointmentList = ({ title, emptyMessage, appointments }: Props) => {
  return (
    <div className='flex flex-col gap-y-4 rounded-xl border-gray-400 p-4'>
      <div>
        <Text as='h2' variant='h2'>
          {title}
        </Text>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {appointments.length === 0 ? <p>{emptyMessage}</p> : appointments.map((a) => <AppointmentCard key={a.id} appointment={a} />)}
      </div>
    </div>
  );
};

export default AppointmentList;
