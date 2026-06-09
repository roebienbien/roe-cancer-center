import Text from '@/components/ui/Text';
import RegisterDoctorForm from './RegisterDoctorForm';
import DoctorDashboard from './DoctorDashboard';

const RegisterDoctorPage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Text>Doctor Page</Text>
      <RegisterDoctorForm />
      <DoctorDashboard />
    </div>
  );
};

export default RegisterDoctorPage;
