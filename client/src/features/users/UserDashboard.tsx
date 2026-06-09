import { Button } from '@/components/primitives/button/Button';
import { useGetUserByIdQuery, useGetUsersQuery } from './api/users-api';
import type { User } from './api/users-api';
import { useNavigate, useParams } from 'react-router';

export const UserDashboard = () => {
  const { data, isLoading, isError, error } = useGetUsersQuery();
  const { userId } = useParams();
  const users = data?.data ?? [];
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    if ('status' in error && error.status === 401) {
      return <p>Please login first</p>;
    }
    return <p>Error fetching users</p>;
  }

  if (users.length === 0) return <p>No Users found</p>;

  const handleUpdate = () => {
    console.log('Update');
  };

  // const handleDelete = (id: string) => {
  //   const confirmed = confirm('Are you sure you want to delete this user');
  //   if (!confirm) return;
  //   deleteUserMutation(id);
  //   console.log('Delete');
  // };

  return (
    <div className='rounded-2xl bg-white p-6 shadow'>
      <h2 className='mb-4 text-2xl font-semibold'>Users Dashboard</h2>

      <div className='overflow-x-auto'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='border-b bg-gray-100'>
              <th className='p-3 text-left font-semibold'>id</th>
              <th className='p-3 text-left font-semibold'>Email</th>
              <th className='p-3 text-left font-semibold'>Role</th>
              <th className='p-3 text-right font-semibold'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user: User) => (
              <tr onClick={() => navigate(user.id)} key={user.id} className='cursor-pointer border-b hover:bg-gray-50'>
                <td className='p-3'>{user.id}</td>
                <td className='p-3'>{user.email}</td>
                <td className='p-3'>{user.role}</td>

                <td className='p-3'>
                  <div className='flex justify-end gap-2'>
                    <Button onClick={handleUpdate}>Update</Button>

                    <Button>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
