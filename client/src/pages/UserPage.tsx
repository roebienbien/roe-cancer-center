import { useParams } from 'react-router-dom';

import { useGetUserByIdQuery } from '../store/api/api-slice';

const UserPage = () => {
  const { id } = useParams();
  const { data } = useGetUserByIdQuery(id!);

  if (!data) return <p>User not found</p>;
  return <div>{data.email}</div>;
};

export default UserPage;
