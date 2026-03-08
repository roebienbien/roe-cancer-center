import { useGetUserByIdQuery } from '../store/api/api-slice';

const UserDetails = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useGetUserByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>User not found</p>;
  if (!data) return <p>User not found</p>;

  return (
    <div>
      <h2>{data.email}</h2>
      <p>{new Date(data.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default UserDetails;
