import Typography from '@/components/ui/Typography';
import RegisterDoctorForm from './RegisterDoctorForm';
import DoctorDashboard from './DoctorDashboard';

const RegisterDoctorPage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Typography>Doctor Page</Typography>
      <RegisterDoctorForm />
      <DoctorDashboard />
    </div>
  );
};

export default RegisterDoctorPage;
