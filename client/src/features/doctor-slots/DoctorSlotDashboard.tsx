import Typography from '@/components/ui/Typography';
import { useGetAvailableDoctorSlotsQuery } from './doctor-slot-api';

const DoctorSlotDashboard = () => {
  const { data: slots } = useGetAvailableDoctorSlotsQuery();
  console.log(slots);

  if (!slots) return <p>Slots not found</p>;
  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='border-b text-left'>
            <th className='p-2'>Doctor</th>
            <th className='p-2'>Specialization</th>
            <th className='p-2'>Start</th>
            <th className='p-2'>End</th>
            <th className='p-2'>Booked</th>
            <th className='p-2'>Capacity</th>
          </tr>
        </thead>

        <tbody>
          {slots.map((slot) => (
            <tr key={slot.id} className='border-b'>
              <td className='p-2'>{slot.doctor.name}</td>
              <td className='p-2'>{slot.doctor.specialization ?? 'N/A'}</td>
              <td className='p-2'>{new Date(slot.startAt).toLocaleString()}</td>
              <td className='p-2'>{new Date(slot.endAt).toLocaleString()}</td>
              <td className='p-2'>{slot.booked}</td>
              <td className='p-2'>{slot.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorSlotDashboard;
