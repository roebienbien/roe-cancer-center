import { useForm } from 'react-hook-form';
import { useRegisterMutation } from '../api/auth-api';
import Input from '@/components/primitives/input/Input';
import { Button } from '@/components/primitives/button/Button';
import Text from '@/components/primitives/Text';
import { RegisterFormInput, registerSchema } from '../schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';

const RegisterForm = () => {
  const [userRegister, { isLoading, isError }] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: `test${Math.floor(Math.random() * 10_000)}@test.com`,
      password: 'Password123!',
      confirmPassword: 'Password123!',
      lastName: 'arnaiz',
      firstName: 'roe bien',
      // middleName: '',
      birthDate: new Date('1999-11-27'),
      mobileNumber: '12345678910',
    },
  });
  const onSubmit = (data: RegisterFormInput) => {
    console.log(JSON.stringify(data));
    userRegister(data);
  };

  return (
    <div className='flex flex-col justify-center gap-y-4 rounded-xl bg-surface p-10 shadow-md'>
      <Text as='h1' variant='h1' className='text-center'>
        Register Form
      </Text>
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
