import Typography from '@/components/ui/Typography';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col gap-y-4 rounded-xl bg-blue-200 p-8'>
        <Typography variant='h1' className='text-center'>
          Login Page
        </Typography>
        <LoginForm />
      </div>
      {/* <Dashboard /> */}
    </div>
  );
};

export default LoginPage;
