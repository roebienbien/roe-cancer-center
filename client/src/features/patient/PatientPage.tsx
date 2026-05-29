import { useNavigate, useParams } from 'react-router';
import { useGetPatientByIdQuery } from './patient-api';
import Typography from '@/components/ui/Typography';
import { Button } from '@/components/ui/button/Button';

const PatientPage = () => {
  const { patientId } = useParams();
  const { data: patient, isLoading, error } = useGetPatientByIdQuery(patientId!);
  console.log(patient);
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading patient</p>;

  return (
    <div className='bg-blue-200 p-10'>
      <Typography>Patient Page</Typography>
      <pre>{JSON.stringify(patient, null, 2)}</pre>
      <Button onClick={() => navigate(`/patients/${patientId}/edit`)}>Edit</Button>
    </div>
  );
};

export default PatientPage;
