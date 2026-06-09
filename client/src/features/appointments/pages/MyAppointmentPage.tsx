import { useSearchParams } from 'react-router';
import Tabs from '@/components/tab/Tabs';
import { useGetMyAppointmentsQuery } from '../api/appointment-api';
import AppointmentList from '../components/AppointmentList';

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

const MyAppointmentsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') ?? 'upcoming';

  const { data: upcoming, isLoading } = useGetMyAppointmentsQuery();

  if (isLoading) return <p>Loading...</p>;

  if (!upcoming) {
    return <div>No Appointments found</div>;
  }

  const tabContent = {
    upcoming: {
      title: 'Upcoming Appointments',
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
  };

  const currentTab = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div className='flex h-[200px] flex-col gap-4'>
      <div className=''>
        <Tabs items={tabItems} activeTab={activeTab} onChange={(tab) => setSearchParams({ tab })} />
      </div>

      <AppointmentList title={currentTab.title} emptyMessage={currentTab.emptyMessage} appointments={currentTab.appointments} />
    </div>
  );
};

export default MyAppointmentsPage;
