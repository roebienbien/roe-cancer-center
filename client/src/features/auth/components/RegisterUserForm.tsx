import { useForm } from 'react-hook-form';
import { useRegisterMutation } from '../api/auth-api';
import Input from '@/components/primitives/input/Input';
import { Button } from '@/components/primitives/button/Button';
import Text from '@/components/primitives/Text';
import { RegisterFormInput, registerSchema } from '../schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import BirthDateSelect from '@/components/primitives/BirthDateSelect';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const RegisterUserForm = () => {
  const navigate = useNavigate();
  const [userRegister, { isLoading }] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: `test${Math.floor(Math.random() * 10_000)}@test.com`,
      password: 'Password123!',
      confirmPassword: 'Password123!',
      lastName: 'arnaiz',
      firstName: 'roe bien',
      middleName: '',
      // birthDate: new Date('1999-11-27'),
      mobileNumber: '12345678910',
    },
  });

  const onSubmit = async (data: RegisterFormInput) => {
    try {
      const birthDate = new Date(data.birthYear, data.birthMonth - 1, data.birthDay);
      await userRegister({ ...data, birthDate }).unwrap();
      toast.success('Accounte created successfully');
      navigate('/login', { state: { registered: true } });
    } catch (error: any) {
      toast.error(error?.data?.message ?? 'Something wnt wrong. Please try again.');
    }
  };

  return (
    <div className='flex flex-col justify-center gap-y-4 rounded-xl border bg-surface p-10 shadow-md'>
      <Text as='h1' variant='h1' className='text-center'>
        Register Form
      </Text>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
        <div>
          <Text className='font-semibold'>Full Name</Text>
          <div className='grid grid-cols-3 gap-x-2'>
            <Input id='lastName' register={register} errors={errors} />
            <Input id='firstName' register={register} errors={errors} />
            <Input id='middleName' register={register} errors={errors} />
          </div>
        </div>
        <Input id='mobileNumber' label='Mobile Number' register={register} errors={errors} />
        <BirthDateSelect register={register} errors={errors} watch={watch} />
        <Input id='email' label='Email' register={register} errors={errors} autoComplete='email' />
        <Input id='password' label='Password' type='password' register={register} errors={errors} />
        <Input id='confirmPassword' label='Confirm Password' type='password' register={register} errors={errors} />
        <Text>
          People who use our service may have uploaded your contact information to Facebook. Learn more. <br />
        </Text>
        <Button type='submit' className='w-full rounded-xl'>
          {isLoading ? 'Submitting' : 'Submit'}{' '}
        </Button>
        <Button to='/login' variant='secondary' className='w-full rounded-xl text-center'>
          Already have an account?
        </Button>
      </form>
    </div>
  );
};

export default RegisterUserForm;
