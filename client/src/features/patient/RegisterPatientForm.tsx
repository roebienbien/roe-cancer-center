import { useForm } from 'react-hook-form';
import { RegisterPatientInput, registerPatientSchema } from './RegisterPatientSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';
import { useCreatePatientMutation } from './api/patient-api';
import Typography from '@/components/ui/Typography';
import { useNavigate } from 'react-router';

const RegisterPatientForm = () => {
  const navigate = useNavigate();
  const [create, { isLoading }] = useCreatePatientMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterPatientInput>({
    resolver: zodResolver(registerPatientSchema),
    defaultValues: {
      // lastName: 'Arnaiz',
      // firstName: 'John',
      // middleName: 'A',
      // sex: 'Male',
      // birthDate: '1990-01-01',
      // phone: '09123456789',
      // address: 'Taguig',
    },
  });

  const onSubmit = (data: RegisterPatientInput) => {
    create(data);
  };

  const onCancel = () => {
    // reset();
    navigate('/');
  };

  return (
    <div className='rounded-xl bg-surface p-10 shadow-lg'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-y-4'>
          <Typography as='h1' variant='h1' className='text-center'>
            Patient Registration Form
          </Typography>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-full'>
              <Typography>FULL NAME</Typography>
              <div className='grid grid-cols-3 gap-4'>
                <Input id='lastName' register={register} errors={errors} />
                <Input id='firstName' register={register} errors={errors} />
                <Input id='middleName' register={register} errors={errors} />
              </div>
            </div>

            <Input id='sex' register={register} errors={errors} />

            <Input id='birthDate' type='date' label='Birth Date' register={register} errors={errors} />

            <Input id='phone' type='tel' register={register} errors={errors} />

            <Input id='address' register={register} errors={errors} />

            <Input id='notes' register={register} errors={errors} />
          </div>
          <div className='flex justify-between'>
            <Button onClick={onCancel} variant='secondary' className='w-40'>
              Cancel
            </Button>
            <Button type='submit' className='w-40'>
              {isLoading ? 'Submitting' : 'Submit'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPatientForm;
