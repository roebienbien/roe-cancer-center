import { Button } from '@/components/ui/button/Button';
import Input from '@/components/ui/Input';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = () => {
    console.log('submitted');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=''>
      <div className='grid grid-cols-3 gap-2'>
        <Input id='lastName' label={'Last Name'} register={register} errors={errors} />
        <Input id='firstName' label={'First Name'} register={register} errors={errors} />
        <Input id='middleName' label={'Middle Name'} register={register} errors={errors} />
        <Input id='email' label={'Email address'} register={register} errors={errors} />
        <Input id='mobileNumber' label={'Mobile Number'} register={register} errors={errors} />
        <Input id='middleName' label={'Middle Name'} register={register} errors={errors} />
        <Input id='birthDate' label={'Date of Birth'} register={register} errors={errors} />
        <Input id='sex' label={'Sex'} register={register} errors={errors} />
      </div>
      <Button type='submit' className=''>
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
