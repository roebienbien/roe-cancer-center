import { useMeQuery } from '@/features/auth/api/auth-api';
import { Role } from '@/features/users/api/users-api';
import { Navigate, Outlet } from 'react-router';

type Props = {
  allowedRoles?: Role[];
};

const ProtectedRoute = ({ allowedRoles }: Props) => {
  const { data: user, isLoading } = useMeQuery();

  if (isLoading) {
    return <div className='flex h-screen items-center justify-center'>Loading...</div>;
  }

  if (!user) return <Navigate to='/login' replace />;

  console.log('user', user);

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to='/forbidden' replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
