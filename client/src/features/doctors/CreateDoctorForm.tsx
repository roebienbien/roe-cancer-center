import { useForm } from 'react-hook-form';
import { useCreateDoctorMutation } from './doctor-api';
import { CreateDoctorFormData, createDoctorSchema } from './doctor-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@/components/ui/Typography';
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/button/Button';

const CreateDoctorForm = () => {
  const [createDoctor] = useCreateDoctorMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDoctorFormData>({
    resolver: zodResolver(createDoctorSchema),
    defaultValues: {
      lastName: 'arnaiz',
      firstName: 'roebien',
      middleName: 'pedragosa',
      specialization: 'urology',
      phone: '1234567910',
    },
  });

  const onSubmit = (data: CreateDoctorFormData) => {
    createDoctor(data);
    confirm('Doctor created');
  };
  return (
    <div className='flex flex-col gap-y-8 bg-red-100 p-10'>
      <Typography as='h2' variant='h2' className='text-center'>
        Registes as Doctor
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-3 gap-4'>
          <Input id='lastName' label='Last Name' register={register} errors={errors} />

          <Input id='firstName' label='First Name' register={register} errors={errors} />

          <Input id='middleName' label='Middle Name' register={register} errors={errors} />

          <Input id='specialization' label='Specialization' register={register} errors={errors} />

          <Input id='phone' type='tel' label='Phone' register={register} errors={errors} />
        </div>
        <div className='mt-4 flex justify-between'>
          <Button variant='secondary'>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateDoctorForm;
