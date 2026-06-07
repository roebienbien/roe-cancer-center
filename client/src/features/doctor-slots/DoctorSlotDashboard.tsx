import { useNavigate } from 'react-router';
import { useGetAvailableDoctorSlotsQuery } from './doctor-slot-api';

const DoctorSlotDashboard = () => {
  const navigate = useNavigate();
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
            <tr key={slot.id} onClick={() => navigate(`/doctor-slots/${slot.id}`)} className='cursor-pointer border-b hover:bg-zinc-200'>
              <td className='p-2'>{slot.doctor.name}</td>
              <td className='p-2'>{slot.doctor.specialization ?? 'N/A'}</td>
              <td className='p-2'>{new Date(slot.startAt).toLocaleString()}</td>
              <td className='p-2'>{new Date(slot.endAt).toLocaleString()}</td>
              <td className='p-2'>{slot.booked}</td>
              <td className='p-2'>{slot.capacity}</td>
              {/* <td> */}
              {/*   <Button onClick={handleBook}>Book</Button> */}
              {/* </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorSlotDashboard;
