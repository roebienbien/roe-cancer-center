import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/primitives/button/Button';
import Input from '@/components/primitives/input/Input';
import { useUpdatePatientMutation, useGetPatientByIdQuery, useRegisterPatientMutation } from './patient-api';
import Text from '@/components/primitives/Text';
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
      sex: 'FEMALE',
      barangay: 'Barangay San Antonio',
      street: '123 Rizal Street',
      city: 'Taguig',
      province: 'Metro Manila',
      region: 'NCR',
      postalCode: '1630',
      country: 'PH',
      notes: 'Patient has a history of hypertension.',
    },
  });

  useEffect(() => {
    // if (mode === 'edit' && patientResponse?.data) {
    //   reset(patientResponse.data);
    // }
    if (mode === 'edit' && patientResponse) {
      reset(patientResponse);
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
          <Text as='h1' variant='h1' className='text-center'>
            {mode === 'create' ? 'Patient Registration Form' : 'Update Patient Profile'}
          </Text>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-full'>
              <Text>Full Address</Text>
              <div className='grid grid-cols-3 gap-4'>
                <Input id='barangay' register={register} errors={errors} />
                <Input id='street' register={register} errors={errors} />
                <Input id='city' register={register} errors={errors} />
                <Input id='province' register={register} errors={errors} />
                <Input id='region' register={register} errors={errors} />
                <Input id='postalCode' register={register} errors={errors} />
                <Input id='country' register={register} errors={errors} />
              </div>
            </div>
            <Input id='sex' register={register} errors={errors} />
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
