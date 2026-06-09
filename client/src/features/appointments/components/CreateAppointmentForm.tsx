import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';
import DoctorSlotDashboard from '@/features/doctor-slots/DoctorSlotDashboard';
import { useCreateAppointmentMutation } from '../api/appointment-api';
import { CreateAppointmentFormData, createAppointmentSchema } from '../schemas/appointment-schema';

const CreateAppointmentForm = () => {
  const [createAppointment, { isLoading, isError }] = useCreateAppointmentMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAppointmentFormData>({
    resolver: zodResolver(createAppointmentSchema),
    defaultValues: {
      doctorSlodId: '',
    },
  });

  // const onSubmit = (data: CreateAppointmentFormData) => {
  //   createAppointment({ ...data, startAt: new Date(data.startAt).toISOString(), endAt: new Date(data.endAt).toISOString() });
  // };

  const onSubmit = (data: CreateAppointmentFormData) => {
    console.log('Submit');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <DoctorSlotDashboard />

      <Button type='submit' disabled={isLoading} className='w-full'>
        {isLoading ? 'Creating...' : 'Create Appointment'}
      </Button>

      {isError && <p className='text-sm text-red-500'>Failed to create appointment</p>}
    </form>
  );
};

export default CreateAppointmentForm;
