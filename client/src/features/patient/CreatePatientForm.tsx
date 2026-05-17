import { useForm } from 'react-hook-form';
import { CreatePatientFormData, CreatePatientSchema } from './CreatePatientSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button/Button';
import Input from '@/components/ui/Input';
import { useCreatePatientMutation } from './api/patient-api';
import Typography from '@/components/ui/Typography';
import { useNavigate } from 'react-router';

const CreatePatientForm = () => {
  const navigate = useNavigate();
  const [create, { isLoading }] = useCreatePatientMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePatientFormData>({
    resolver: zodResolver(CreatePatientSchema),
    defaultValues: {
      lastName: 'Arnaiz',
      firstName: 'John',
      middleName: 'A',
      sex: 'Male',
      birthDate: '1990-01-01',
      phone: '09123456789',
      address: 'Taguig',
    },
  });

  const onSubmit = (data: CreatePatientFormData) => {
    create(data);
  };

  const onCancel = () => {
    // reset();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-y-4 rounded-2xl bg-blue-100 p-10'>
        <Typography as='h1' variant='h1' className='text-center'>
          Patient Registration Form
        </Typography>
        <div className='grid grid-cols-3 gap-4'>
          <Input id='lastName' label='Last Name' register={register} errors={errors} />
          <Input id='firstName' label='First Name' register={register} errors={errors} />
          <Input id='middleName' label='Middle Name' register={register} errors={errors} />

          <Input id='sex' label='Sex' register={register} errors={errors} />

          <Input id='birthDate' type='date' label='Birth Date' register={register} errors={errors} />

          <Input id='phone' type='tel' label='Phone' register={register} errors={errors} />

          <Input id='address' label='Address' register={register} errors={errors} />

          <Input id='notes' label='Notes' register={register} errors={errors} />
        </div>
        <div className='flex justify-between'>
          <Button onClick={onCancel} variant='secondary' className='w-40'>
            Cancel
          </Button>
          <Button type='submit' className='w-40'>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreatePatientForm;
