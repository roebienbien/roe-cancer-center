import { useNavigate, useParams } from 'react-router';
import { useGetDoctorByIdQuery } from './doctor-api';
import Text from '@/components/primitives/Text';
import { Button } from '@/components/primitives/button/Button';

const DoctorPage = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetDoctorByIdQuery(doctorId!);

  return (
    <div>
      <Text>Doctor Profile</Text>
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
