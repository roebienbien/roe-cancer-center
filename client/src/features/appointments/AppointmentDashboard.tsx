import Typography from '@/components/ui/Typography';
import DoctorSlotDashboard from '../doctor-slots/DoctorSlotDashboard';
import CreateAppointmentForm from './CreateAppointmentForm';

const AppointmentDashboard = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Typography>Appointment Dashboard</Typography>
      <CreateAppointmentForm />
    </div>
  );
};

export default AppointmentDashboard;
