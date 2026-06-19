import { useForm } from 'react-hook-form';
import Input from '@/components/primitives/input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/primitives/button/Button';
import './LoginForm.scss';
import { useLoginMutation } from '../api/auth-api';
import { useNavigate } from 'react-router';
import { LoginFormInput, loginSchema } from '../schemas/auth-schema';

export default function LoginForm() {
  const navigate = useNavigate();
  const [login, { isLoading, isError }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'test@test.com',
      password: 'Password123!',
    },
  });

  const onSubmit = (data: LoginFormInput) => {
    console.log(JSON.stringify(data));
    login(data);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=''>
      <div className='grid gap-2'>
        <Input<LoginFormInput> id='email' label={'Email'} type='email' register={register} errors={errors} />
        <Input<LoginFormInput> id='password' label={'password'} type='password' register={register} errors={errors} />
      </div>

      <Button type='submit' disabled={isLoading} className='w-full'>
        {isLoading ? 'Logging in' : 'Login'}
      </Button>
      {isError && <p className='login-form__error'>Login failed</p>}
    </form>
  );
}
