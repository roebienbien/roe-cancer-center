import { useForm } from 'react-hook-form';
import { useCreateDoctorMutation } from './doctor-api';
import { CreateDoctorFormData, createDoctorSchema } from './doctor-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Text from '@/components/ui/Text';
import { Button } from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';

const RegisterDoctorForm = () => {
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
    <div className='flex flex-col gap-y-8 bg-blue-100 p-10'>
      <Text as='h2' variant='h2' className='text-center'>
        Register as Doctor
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-3'>
            <Text>FULL NAME</Text>
            <div className='grid grid-cols-3 gap-4'>
              <Input id='lastName' register={register} errors={errors} />
              <Input id='firstName' register={register} errors={errors} />
              <Input id='middleName' register={register} errors={errors} />
            </div>
          </div>
          <Input id='specialization' register={register} errors={errors} />
          <Input id='phone' type='tel' register={register} errors={errors} />
        </div>
        <div className='mt-4 flex justify-between'>
          <Button variant='secondary'>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterDoctorForm;
