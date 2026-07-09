import Text from '@/components/primitives/Text';
import LoginForm from '../components/LoginForm';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'sonner';

const LoginUserPage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.registered) {
      toast.success('Account created! Please log in');
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col gap-y-4 rounded-xl bg-blue-200 p-8'>
        <Text variant='h1' className='text-center'>
          Login Page
        </Text>
        <LoginForm />
      </div>
      {/* <Dashboard /> */}
    </div>
  );
};

export default LoginUserPage;
