import Text from '@/components/ui/Text';
import { useParams } from 'react-router';
import { useGetAvailableDoctorSlotsQuery, useGetDoctorSlotByIdQuery } from './doctor-slot-api';

const DoctorSlotDetailsPage = () => {
  const { doctorSlotId } = useParams();
  const { data: doctorSlot } = useGetDoctorSlotByIdQuery(doctorSlotId!);
  // const { data: patient, isLoading, error } = useGetMeQuery();
  console.log(doctorSlotId);
  return (
    <div className='space-y-6'>
      <Text variant='h1'>Doctor Slot Details</Text>

      <div className='rounded-lg border p-4'>
        <h2 className='mb-2 font-semibold'>Doctor Information</h2>
        <p>
          <strong>Name:</strong> {doctorSlot?.doctor.firstName} {doctorSlot?.doctor.middleName} {doctorSlot?.doctor.lastName}
        </p>
        <p>
          <strong>Phone:</strong> {doctorSlot?.doctor.phone}
        </p>
        <p>
          <strong>Status:</strong> {doctorSlot?.doctor.status}
        </p>
      </div>

      <div className='rounded-lg border p-4'>
        <h2 className='mb-2 font-semibold'>Schedule</h2>
        <p>
          <strong>Start:</strong> {new Date(doctorSlot?.slot.startAt).toLocaleString()}
        </p>
        <p>
          <strong>End:</strong> {new Date(doctorSlot?.slot.endAt).toLocaleString()}
        </p>
        <p>
          <strong>Capacity:</strong> {doctorSlot?.slot.capacity}
        </p>
        <p>
          <strong>Booked:</strong> {doctorSlot?._count.appointments}
        </p>
        <p>
          <strong>Available:</strong> {doctorSlot?.slot.capacity - doctorSlot?._count.appointments}
        </p>
      </div>
    </div>
  );
};

export default DoctorSlotDetailsPage;
