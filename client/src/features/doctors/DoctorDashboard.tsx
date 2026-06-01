import { useNavigate } from 'react-router';
import { useGetAllDoctorsQuery } from './doctor-api';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const { data: doctors, isLoading } = useGetAllDoctorsQuery();

  if (isLoading) return <p>Loading...</p>;

  if (!doctors) return <p> No Doctors Found</p>;

  return (
    <div>
      <h3 className='mb-4 text-xl font-semibold'>Doctor Dashboard</h3>

      <table className='w-full border-collapse border'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border p-2 text-left'>Last Name</th>
            <th className='border p-2 text-left'>First Name</th>
            <th className='border p-2 text-left'>Middle Name</th>
            <th className='border p-2 text-left'>Email</th>
            <th className='border p-2 text-left'>Specialization</th>
            <th className='border p-2 text-left'>License Number</th>
            <th className='border p-2 text-left'>Phone</th>
          </tr>
        </thead>
        <tbody>
          {doctors?.data.map((d) => (
            <tr key={d.id} onClick={() => navigate(`/patients/${d.id}`)} className='cursor-pointer hover:bg-red-200'>
              <td className='border p-2'>{d.lastName}</td>
              <td className='border p-2'>{d.firstName}</td>
              <td className='border p-2'>{d.middleName}</td>
              <td className='border p-2'>{d.email}</td>
              <td className='border p-2'>{d.specialization}</td>
              <td className='border p-2'>{d.licenseNumber}</td>
              <td className='border p-2'>{d.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorDashboard;
