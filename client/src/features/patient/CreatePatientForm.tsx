import { useForm } from 'react-hook-form';
import { CreatePatientFormData, CreatePatientSchema } from './CreatePatientSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button/Button';
import Input from '@/components/ui/Input';
import { useCreatePatientMutation } from './api/patient-api';

const CreatePatientForm = () => {
  const [create, { isLoading }] = useCreatePatientMutation();
  const {
    register,
    handleSubmit,
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>
        Register For
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Input id='lastName' label='Last Name' register={register} errors={errors} />
            <Input id='firstName' label='First Name' register={register} errors={errors} />
            <Input id='middleName' label='Middle Name' register={register} errors={errors} />

            <Input id='sex' label='Sex' register={register} errors={errors} />

            <Input id='birthDate' type='date' label='Birth Date' register={register} errors={errors} />

            <Input id='phone' type='tel' label='Phone' register={register} errors={errors} />

            <Input id='address' label='Address' register={register} errors={errors} />

            <Input id='notes' label='Notes' register={register} errors={errors} />
          </div>
        </div>
      </h2>
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default CreatePatientForm;
