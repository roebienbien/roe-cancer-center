import { useForm } from 'react-hook-form';
import { LoginFormData, loginSchema } from '../schema/login-schema';
import Input from '@/components/ui/input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button/Button';
import './LoginForm.scss';
import { useLoginMutation } from '../api/auth-api';

export default function LoginForm() {
  const [login, { isLoading, isError }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'test@test.com',
      password: 'Password123!',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(JSON.stringify(data));
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=''>
      <div className='grid gap-2'>
        <Input<LoginFormData> id='email' label={'Email'} type='email' register={register} errors={errors} />
        <Input<LoginFormData> id='password' label={'password'} type='password' register={register} errors={errors} />
      </div>

      <Button type='submit' disabled={isLoading} className='w-full'>
        {isLoading ? 'Logging in' : 'Login'}
      </Button>
      {isError && <p className='login-form__error'>Login failed</p>}
    </form>
  );
}
