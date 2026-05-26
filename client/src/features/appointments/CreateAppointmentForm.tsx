import { useForm } from 'react-hook-form';
import { useCreateAppointmentMutation } from './api/appointment-api';
import { CreateAppointmentFormData, createAppointmentSchema } from './appointment-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';

const CreateAppointmentForm = () => {
  const [createAppointment, { isLoading, isError }] = useCreateAppointmentMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAppointmentFormData>({
    resolver: zodResolver(createAppointmentSchema),
    defaultValues: {
      startAt: '',
      endAt: '',
      patientId: '',
      notes: '',
    },
  });

  const onSubmit = (data: CreateAppointmentFormData) => {
    createAppointment({ ...data, startAt: new Date(data.startAt).toISOString(), endAt: new Date(data.endAt).toISOString() });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='grid gap-3'>
        <Input<CreateAppointmentFormData> id='patientId' label='Patient ID' type='text' register={register} errors={errors} />

        <Input<CreateAppointmentFormData> id='startAt' label='Start Time' type='datetime-local' register={register} errors={errors} />

        <Input<CreateAppointmentFormData> id='endAt' label='End Time' type='datetime-local' register={register} errors={errors} />

        <Input<CreateAppointmentFormData> id='notes' label='Notes' type='text' register={register} errors={errors} />
      </div>

      <Button type='submit' disabled={isLoading} className='w-full'>
        {isLoading ? 'Creating...' : 'Create Appointment'}
      </Button>

      {isError && <p className='text-sm text-red-500'>Failed to create appointment</p>}
    </form>
  );
};

export default CreateAppointmentForm;
