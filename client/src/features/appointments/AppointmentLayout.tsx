import Typography from '@/components/ui/Typography';
import { Outlet } from 'react-router';
import AppointmentDashboard from './AppointmentDashboard';
import MyAppointmentsPage from './MyAppointmentPage';

const AppointmentLayout = () => {
  return (
    <div>
      <Typography>Appointment Layout</Typography>
      <AppointmentDashboard />
      <MyAppointmentsPage />
      <Outlet />
    </div>
  );
};

export default AppointmentLayout;
