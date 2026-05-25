import { Button } from '@/components/ui/button/Button';
import Input from '@/components/ui/Input';
import { useForm } from 'react-hook-form';
import { RegisterFormValues } from '../schema/register-schema';
import { useRegisterMutation } from '../api/auth-api';
// import { useRegisterMutation } from '@/features/users/api/users-api';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-3 gap-2'>
        <Input id='email' label={'Email'} register={register} errors={errors} autoComplete='email' />
        <Input id='password' type='password' label={'Password'} register={register} errors={errors} />
        <Input id='confirmPassword' type='password' label={'Confirm password'} register={register} errors={errors} />
      </div>
      <Button type='submit'>{isLoading ? 'Submitting' : 'Submit'} </Button>
    </form>
  );
};

export default RegisterForm;
