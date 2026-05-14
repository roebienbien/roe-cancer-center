import { useGetAppointmentsQuery } from './api/appointment-api';
import { AppointmentList } from './AppointmentList';

export default function MyAppointmentsPage() {
  const { data, isLoading } = useGetAppointmentsQuery();

  if (isLoading) return <p>Loading...</p>;

  if (!data) {
    return <div>No Appointments found</div>;
  }

  return (
    <div>
      <h1 className='mb-4 text-xl font-bold'>My Appointments</h1>

      <AppointmentList appointments={data?.data || []} />
    </div>
  );
}
