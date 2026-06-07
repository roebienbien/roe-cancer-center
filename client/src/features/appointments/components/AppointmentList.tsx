import Typography from '@/components/ui/Typography';
import AppointmentCard from './AppointmentCard';
import { Appointment } from '../api/appointment-api';
import { emitKeypressEvents } from 'readline';

type Props = {
  title: 'Upcoming' | 'History' | 'Cancelled';
  emptyMessage: string;
  appointments: Appointment[];
};

const AppointmentList = ({ title, emptyMessage, appointments }: Props) => {
  return (
    <div>
      <Typography>{title}</Typography>
      <div className='grid grid-cols-3 gap-4'>
        {appointments.length === 0 ? <p>{emptyMessage}</p> : appointments.map((a) => <AppointmentCard key={a.id} appointment={a} />)}
      </div>
    </div>
  );
};

export default AppointmentList;
