import { Button } from '@/components/ui/button/Button';
import { useGetMyAppointmentsQuery } from './api/appointment-api';
import AppointmentCard from './components/AppointmentCard';
import AppointmentList from './components/AppointmentList';

import { useSearchParams } from 'react-router';
import Tabs from '@/components/tab/Tabs';

const MyAppointmentsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') ?? 'upcoming';

  const { data: upcoming, isLoading } = useGetMyAppointmentsQuery();

  if (isLoading) return <p>Loading...</p>;

  if (!upcoming) {
    return <div>No Appointments found</div>;
  }

  const tabItems = [
    {
      label: 'Upcoming',
      value: 'upcoming',
    },
    {
      label: 'History',
      value: 'history',
    },
    {
      label: 'Cancelled',
      value: 'cancelled',
    },
  ];
  const tabContent = {
    upcoming: {
      title: 'Upcoming',
      emptyMessage: 'No upcoming appointments.',
      appointments: upcoming,
    },
    history: {
      title: 'History',
      emptyMessage: 'No appointment history yet.',
      appointments: [], // change
    },
    cancelled: {
      title: 'Cancelled',
      emptyMessage: 'No cancelled appointments.',
      appointments: [], // todo:change to actual cancelled data
    },
  } as const;

  const currentTab = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div className=''>
      <div className=''>
        <Tabs items={tabItems} activeTab={activeTab} onChange={(tab) => setSearchParams({ tab })} />
      </div>

      <AppointmentList title={currentTab.title} emptyMessage={currentTab.emptyMessage} appointments={currentTab.appointments} />

      {/* {activeTab === 'upcoming' && <AppointmentList title='Upcoming' emptyMessage='No upcomming apointments' appointments={upcoming} />} */}
      {/* {activeTab === 'history' && <AppointmentList title='History' emptyMessage='No appointment history yet' appointments={[]} />} */}
      {/* {activeTab === 'cancelled' && <AppointmentList title='Cancelled' emptyMessage='No cancelled appointments' appointments={[]} />} */}
    </div>
  );
};

export default MyAppointmentsPage;
