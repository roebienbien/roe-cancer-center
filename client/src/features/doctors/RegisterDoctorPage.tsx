import Typography from '@/components/ui/Typography';
import RegisterDoctorForm from './RegisterDoctorForm';

const RegisterDoctorPage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Typography>Doctor Page</Typography>
      <RegisterDoctorForm />
    </div>
  );
};

export default RegisterDoctorPage;
