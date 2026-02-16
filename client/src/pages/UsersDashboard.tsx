import RegisterUserForm from '../components/forms/registerUserForm';
import { useGetUsersQuery } from '../store/api/api-slice';

const UsersDashboard = () => {
  const { data = [], isLoading, isError } = useGetUsersQuery();

  const handleUpdate = async (id: string) => {
    console.log('update');
  };

  const handleDelete = async (id: string) => {};

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p className='text-red-500'>Failed to load users</p>;

  return (
    <div className='grid h-screen grid-cols-2 items-center justify-center bg-red-200'>
      <table className='w-full border bg-blue-200'>
        <thead>
          <tr className='bg-zinc-200'>
            <th className='border p-2'>ID</th>
            <th className='border p-2'>Email</th>
            <th className='border p-2'>Created</th>
            <th className='border p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((u) => (
            <tr key={u.id}>
              <td className='border p-2'>{u.id}</td>
              <td className='border p-2'>{u.email}</td>
              <td className='border p-2'>{new Date(u.createdAt).toLocaleDateString()}</td>
              <td className='flex justify-center gap-x-4'>
                <button onClick={() => handleUpdate(u.id)} className='cursor-pointer text-blue-500'>
                  Update
                </button>
                <button onClick={() => handleDelete(u.id)} className='cursor-pointer text-red-500'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='bg-zinc-200'>
        <h2>Register User</h2>

        <RegisterUserForm />
      </div>
    </div>
  );
};

export default UsersDashboard;
