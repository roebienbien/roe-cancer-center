import Typography from '@/components/ui/Typography';
import CreateDoctorForm from './CreateDoctorForm';

const CreateDoctorPage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Typography>Doctor Page</Typography>
      <CreateDoctorForm />
    </div>
  );
};

export default CreateDoctorPage;
