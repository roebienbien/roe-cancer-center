import { useForm } from 'react-hook-form';
import type { RegisterUserInput } from '../../schemas/user';
import axios from 'axios';
import { api } from '../../lib/axios';

type Props = {
  onSuccess: () => void;
};

const RegisterUserForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterUserInput>();

  const onSubmit = async (data: RegisterUserInput) => {
    try {
      const res = await api.post('/users', data);
      console.log('Register successful', res.data);
      // onSuccess();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError('root', {
          message: err.response?.data?.message || 'Login failed',
        });
      } else {
        setError('root', { message: 'Something went wrong' });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      {/* Email */}
      <div>
        <input {...register('email')} placeholder='Email' className='w-full border p-2' />
        {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <input type='password' {...register('password')} placeholder='Password' className='w-full border p-2' />
        {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <input type='password' {...register('confirmPassword')} placeholder='Confirm Password' className='w-full border p-2' />
        {errors.confirmPassword && <p className='text-sm text-red-500'>{errors.confirmPassword.message}</p>}
      </div>

      <button type='submit' className='bg-black px-4 py-2 text-white'>
        Submit
      </button>
    </form>
  );
};
export default RegisterUserForm;
