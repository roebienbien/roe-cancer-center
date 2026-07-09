import { Button } from '@/components/primitives/button/Button';
import RegisterUserForm from '../components/RegisterUserForm';

const RegisterUserPage = () => {
  return (
    <div className='m-10 mx-auto flex min-h-screen w-[50%] items-center justify-center bg-background'>
      <div>
        <Button to='/'>Go Back</Button>
        <RegisterUserForm />
      </div>
    </div>
  );
};

export default RegisterUserPage;
