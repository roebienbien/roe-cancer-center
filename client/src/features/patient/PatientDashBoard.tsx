import { useGetAllPatientQuery } from './api/patient-api';

const PatientDashBoard = () => {
  const { data, isLoading } = useGetAllPatientQuery();

  if (isLoading) return <p>Loading...</p>;

  if (!data) return <p>No Patient found</p>;
  return (
    <div>
      <h3 className='mb-4 text-xl font-semibold'>Patient Dashboard</h3>

      <table className='w-full border-collapse border'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border p-2 text-left'>Last Name</th>

            <th className='border p-2 text-left'>First Name</th>

            <th className='border p-2 text-left'>Middle Name</th>

            <th className='border p-2 text-left'>Sex</th>

            <th className='border p-2 text-left'>Birth Date</th>

            <th className='border p-2 text-left'>Phone</th>

            <th className='border p-2 text-left'>Address</th>

            <th className='border p-2 text-left'>Notes</th>
          </tr>
        </thead>

        <tbody>
          {data?.data.map((p) => (
            <tr key={p.id}>
              <td className='border p-2'>{p.lastName}</td>

              <td className='border p-2'>{p.firstName}</td>

              <td className='border p-2'>{p.middleName}</td>

              <td className='border p-2'>{p.sex}</td>

              <td className='border p-2'>{new Date(p.birthDate).toLocaleDateString()}</td>

              <td className='border p-2'>{p.phone}</td>

              <td className='border p-2'>{p.address}</td>

              <td className='border p-2'>{p.notes || 'No notes'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientDashBoard;
