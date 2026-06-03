import { data, useParams } from 'react-router';
import { useGetUserByIdQuery } from './api/users-api';
import Typography from '@/components/ui/Typography';

const UserProfilePage = () => {
  const { id } = useParams();
  const { data: user } = useGetUserByIdQuery(id!);

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <Typography>Hello {user.email}</Typography>
    </div>
  );
};

export default UserProfilePage;
