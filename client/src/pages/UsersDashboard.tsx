import { useEffect, useState } from 'react';
import userApi from '../services/user-services';
import RegisterUserForm from '../components/forms/registerUserForm';

type TUser = {
  id: number;
  email: string;
  createdAt: string;
};

const UsersDashboard = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userApi.getUsers();
        setUsers(data);
      } catch (error) {
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleUpdate = async (id: number) => {
    console.log('update');
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this users')) return;

    await userApi.deleteUser(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className='text-red-500'>{error}</p>;

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
          {users.map((u) => (
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
