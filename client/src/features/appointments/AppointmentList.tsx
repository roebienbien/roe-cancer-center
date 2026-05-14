import { Appointment } from './appointment-types';

type Props = {
  appointments: Appointment[];
};

export function AppointmentList({ appointments }: Props) {
  return (
    <div className='space-y-3'>
      {appointments.map((a) => (
        <div key={a.id} className='rounded border p-3'>
          <p>{new Date(a.startAt).toLocaleString()}</p>
          <p>Status: {a.status}</p>
        </div>
      ))}
    </div>
  );
}
