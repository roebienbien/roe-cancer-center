import { useNavigate } from 'react-router';
import { useGetAllPatientQuery } from './patient-api';

const PatientDashBoard = () => {
  const navigate = useNavigate();
  const { data: patients, isLoading } = useGetAllPatientQuery();

  if (isLoading) return <p>Loading...</p>;

  if (!patients) return <p>No Patient found</p>;
  return (
    <div>
      <h3 className='mb-4 text-xl font-semibold'>Patient Dashboard</h3>

      <table className='w-full border-collapse border'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border p-2 text-left'>barangay</th>
            <th className='border p-2 text-left'>street</th>
            <th className='border p-2 text-left'>city</th>
            <th className='border p-2 text-left'>province</th>
            <th className='border p-2 text-left'>region</th>
            <th className='border p-2 text-left'>postalCode</th>
            <th className='border p-2 text-left'>country</th>
            <th className='border p-2 text-left'>sex</th>
            <th className='border p-2 text-left'>Notes</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} onClick={() => navigate(`/patients/${p.id}`)} className='cursor-pointer hover:bg-red-200'>
              <td className='border p-2'>{p.barangay}</td>
              <td className='border p-2'>{p.street}</td>
              <td className='border p-2'>{p.city}</td>
              <td className='border p-2'>{p.province}</td>
              <td className='border p-2'>{p.region}</td>
              <td className='border p-2'>{p.postalCode}</td>
              <td className='border p-2'>{p.country}</td>
              <td className='border p-2'>{p.sex}</td>
              <td className='border p-2'>{p.notes || 'No notes'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientDashBoard;
