import { data, useParams } from 'react-router';
import { useGetUserByIdQuery } from './api/users-api';
import Text from '@/components/primitives/Text';

const UserProfilePage = () => {
  const { id } = useParams();
  const { data: user } = useGetUserByIdQuery(id!);

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <Text>Hello {user.email}</Text>
    </div>
  );
};

export default UserProfilePage;
