import { useNavigate, useParams } from 'react-router';
import { useGetDoctorByIdQuery } from './doctor-api';
import Typography from '@/components/ui/Typography';
import { Button } from '@/components/ui/button/Button';

const DoctorPage = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetDoctorByIdQuery(doctorId!);

  return (
    <div>
      <Typography>Doctor Profile</Typography>
      {isLoading ? (
        <p>Loading...</p>
      ) : !data ? (
        <p>Doctor not found</p>
      ) : (
        <div>
          <div>{JSON.stringify(data, null, 2)}</div>
        </div>
      )}
      <Button to={`/doctors/${doctorId}/edit`}>Edit</Button>
    </div>
  );
};

export default DoctorPage;
