// type Doctor = {
//   firstName: string;
// };

import { Appointment } from '../api/appointment-api';

type Props = {
  appointment: Appointment;
};

const AppointmentCard = ({ appointment }: Props) => {
  return (
    <div className='rounded-lg border p-4 shadow-sm'>
      <div className='mb-3 flex items-center justify-between'>
        <h3 className='font-semibold'>{appointment.doctorName}</h3>

        <span className='rounded-full bg-yellow-100 px-2 py-1 text-sm'>{appointment.status}</span>
      </div>

      <div className='space-y-1 text-sm'>
        <p>
          <span className='font-medium'>Type:</span> {appointment.type}
        </p>

        <p>
          <span className='font-medium'>Specialization:</span> {appointment.specialization ?? 'N/A'}
        </p>

        <p>
          <span className='font-medium'>Start:</span> {new Date(appointment.startAt).toLocaleString()}
        </p>

        <p>
          <span className='font-medium'>End:</span> {new Date(appointment.endAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default AppointmentCard;
