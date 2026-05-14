import { useGetAllPatientQuery } from './api/patient-api';

const PatientDashBoard = () => {
  const { data, isLoading } = useGetAllPatientQuery();

  if (isLoading) return <p>Loading...</p>;

  if (!data) return <p>No Patient found</p>;
  return (
    <div>
      <h3>Patient Dashboard</h3>
      {data?.data.map((p) => (
        <div key={p.id}>
          <div>{p.firstName}</div>
          <div>{p.middleName}</div>
        </div>
      ))}
    </div>
  );
};

export default PatientDashBoard;
