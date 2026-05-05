import Typography from '@/components/ui/Typography';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='bg-red-100 p-10'>
        <Typography className='text-center'>Register User</Typography>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
