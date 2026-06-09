import { useNavigate, useParams } from 'react-router';
import { useGetMeQuery, useGetPatientByIdQuery } from './patient-api';
import Text from '@/components/ui/Text';
import { Button } from '@/components/ui/button/Button';

const PatientProfilePage = () => {
  const { data: patient, isLoading, error } = useGetMeQuery();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading patient</p>;
  if (!patient) return <p>Patient not found</p>;

  const { id, firstName, address } = patient;

  console.log('patientId', patient.id);

  return (
    <div className='bg-blue-200 p-10'>
      <Text>Patient Page</Text>
      <pre>{JSON.stringify(patient, null, 2)}</pre>
      <div>{id}</div>
      <div>{firstName}</div>
      <div>{address}</div>
      {/* <Button onClick={() => navigate(`/patients/me/edit`)}>Edit</Button> */}
      <Button onClick={() => navigate('edit')}>Edit</Button>
    </div>
  );
};

export default PatientProfilePage;
