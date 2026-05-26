import { Button } from '@/components/ui/button/Button';
import { useForm } from 'react-hook-form';
import { RegisterFormValues } from '../schema/register-schema';
import { useRegisterMutation } from '../api/auth-api';
import Typography from '@/components/ui/Typography';
import Input from '@/components/ui/input/Input';

const RegisterForm = () => {
  const [userRegister, { isLoading, isError }] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: `test${Math.floor(Math.random() * 10_000)}@test.com`,
      password: 'Password123!',
      confirmPassword: 'Password123!',
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log(JSON.stringify(data));
    userRegister(data);
  };

  return (
    <div className='flex flex-col justify-center gap-y-4 rounded-xl bg-surface p-10 shadow-md'>
      <Typography as='h1' variant='h1' className='text-center'>
        Register Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
        <Input id='email' register={register} errors={errors} autoComplete='email' />
        <Input id='password' type='password' register={register} errors={errors} />
        <Input id='confirmPassword' type='password' register={register} errors={errors} />
        <Button type='submit' className='self-center'>
          {isLoading ? 'Submitting' : 'Submit'}{' '}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
