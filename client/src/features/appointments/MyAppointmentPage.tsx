import { useGetMyAppointmentsQuery } from './api/appointment-api';
import AppointmentCard from './components/AppointmentCard';
import AppointmentList from './components/AppointmentList';

import { useSearchParams } from 'react-router';

const MyAppointmentsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = searchParams.get('tab') ?? 'upcoming';
  const { data: upcoming, isLoading } = useGetMyAppointmentsQuery();

  if (isLoading) return <p>Loading...</p>;

  if (!upcoming) {
    return <div>No Appointments found</div>;
  }

  return (
    <>
      <button onClick={() => setSearchParams({ tab: 'upcoming' })}>Upcoming</button>

      <button onClick={() => setSearchParams({ tab: 'history' })}>History</button>

      <button onClick={() => setSearchParams({ tab: 'cancelled' })}>Cancelled</button>

      {tab === 'upcoming' && <AppointmentList title='Upcoming' emptyMessage='No upcomming apointments' appointments={upcoming} />}
      {tab === 'history' && <AppointmentList title='History' emptyMessage='No appointment history yet' appointments={[]} />}
      {tab === 'cancelled' && <AppointmentList title='Cancelled' emptyMessage='No cancelled appointments' appointments={[]} />}
    </>
  );
};

export default MyAppointmentsPage;

// export default function MyAppointmentsPage() {
//   const { data: appointments, isLoading } = useGetMyAppointmentsQuery();
//
//   if (isLoading) return <p>Loading...</p>;
//
//   if (!appointments) {
//     return <div>No Appointments found</div>;
//   }
//
//   return (
//     <div className='flex h-screen flex-col items-center justify-center'>
//       <h1 className='mb-4 text-xl font-bold'>My Appointments</h1>
//       <AppointmentList title={'Upcoming'} appointments={appointments} />
//       {/* {appointments.map((a) => ( */}
//       {/*   <AppointmentCard key={a.id} appointment={a} /> */}
//       {/* ))} */}
//     </div>
//   );
// }
