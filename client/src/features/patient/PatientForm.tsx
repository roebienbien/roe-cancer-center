import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';
import { useUpdatePatientMutation, useGetPatientByIdQuery, useRegisterPatientMutation } from './patient-api';
import Typography from '@/components/ui/Typography';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { PatientFormInput, registerPatientSchema, updatePatientSchema } from './patient-schema';
import { useEffect } from 'react';

type Props = {
  mode?: 'create' | 'edit';
};

const PatientForm = ({ mode = 'create' }: Props) => {
  const schema = mode === 'create' ? registerPatientSchema : updatePatientSchema;

  const navigate = useNavigate();
  const [registerPatient, { isLoading }] = useRegisterPatientMutation();
  const [updatePatient] = useUpdatePatientMutation();

  const { patientId } = useParams();
  const { data: patientResponse } = useGetPatientByIdQuery(patientId!, {
    skip: mode !== 'edit' || !patientId,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PatientFormInput>({
    resolver: zodResolver(schema),
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

  useEffect(() => {
    if (mode === 'edit' && patientResponse?.data) {
      reset(patientResponse.data);
    }
  }, [patientResponse, reset]);

  const onSubmit = async (data: PatientFormInput) => {
    if (mode === 'create') {
      await registerPatient(data);
    } else {
      await updatePatient(data);
    }
  };

  console.log('API RESPONSE:', patientResponse);

  const onCancel = () => {
    // reset();
    navigate('/');
  };

  return (
    <div className='rounded-xl bg-surface p-10 shadow-lg'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-y-4'>
          <Typography as='h1' variant='h1' className='text-center'>
            {mode === 'create' ? 'Patient Registration Form' : 'Update Patient Profile'}
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
            {mode === 'create' ? (
              <Button type='submit' className='w-40'>
                {isLoading ? 'Submitting' : 'Submit'}
              </Button>
            ) : (
              <Button type='submit' className='w-40'>
                {isLoading ? 'Saving' : 'Save Changes'}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
