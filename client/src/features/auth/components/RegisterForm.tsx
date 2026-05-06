import { Button } from '@/components/ui/button/Button';
import Input from '@/components/ui/Input';
import { useForm } from 'react-hook-form';
import { useRegister } from '../userRegister';
import { RegisterFormValues } from '../register-schema';

const RegisterForm = () => {
  const registerMutation = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'test@test.email',
      password: 'Password123!',
      confirmPassword: 'Password123!',
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    const { confirmPassword, ...payload } = data;
    registerMutation.mutate(payload);
    console.log('User registered');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-3 gap-2'>
        <Input id='email' label={'Email'} register={register} errors={errors} />
        <Input id='password' type='password' label={'Password'} register={register} errors={errors} />
        <Input id='confirmPassword' type='password' label={'Confirm password'} register={register} errors={errors} />
      </div>
      <Button type='submit'>Register</Button>
    </form>
  );
};

export default RegisterForm;
