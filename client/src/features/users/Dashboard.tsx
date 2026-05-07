import { Button } from '@/components/ui/button/Button';
import { useUsers } from './hooks/useUsers';
import './Dashboard.scss';
import { useDeleteUser } from './hooks/useDeleteUser';

type User = {
  id: string;
  email: string;
};

export const Dashboard = () => {
  const { data: users, isLoading, isError } = useUsers();
  const { mutate: deleteUserMutation, isPending } = useDeleteUser();

  const isAuthenticated = !!localStorage.getItem('accessToken');

  if (!isAuthenticated) {
    return <p>Please login First</p>;
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching users</p>;

  if (users.length === 0) return <p>No Users found</p>;

  const handleUpdate = () => {
    console.log('Update');
  };

  const handleDelete = (id: string) => {
    const confirmed = confirm('Are you sure you want to delete this user');
    if (!confirm) return;
    deleteUserMutation(id);
    console.log('Delete');
  };

  return (
    <div className='dashboard-users'>
      <div className='dashboard-users__list'>
        {users.map((user: User) => (
          <div key={user.id} className='dashboard-users__item'>
            <div key={user.id}>{user.email}</div>
            <div className='dashboard-users__actions'>
              <Button onClick={handleUpdate} className='dashboard-users__btn dashboard-users__btn--update'>
                Update
              </Button>
              <Button onClick={() => handleDelete(user.id)} className='dashboard-users__btn dashboard-users__btn--delete'>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
