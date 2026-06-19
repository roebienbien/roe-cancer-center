import Text from '@/components/primitives/Text';
import { useMeQuery } from '../auth/api/auth-api';
import { useGetMeQuery } from '../patient/patient-api';

const UserProfilePage = () => {
  const { data: user, isLoading, error } = useMeQuery();
  const { data: patient } = useGetMeQuery();

  if (isLoading) return <Text>Loading</Text>;

  if (error) return <Text>Not authenticated</Text>;

  if (!user) return <Text>User not found</Text>;

  return (
    <div>
      <Text>Hello {user.id}</Text>
      <Text>{user.email}</Text>
      <Text>{patient?.firstName}</Text>
    </div>
  );
};

export default UserProfilePage;
