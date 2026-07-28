import { useLocation, useNavigate } from 'react-router-dom';
import Text from '@/components/primitives/Text';
import { Button } from '@/components/primitives/button/Button';

const roleLabels: Record<string, string> = {
  doctor: 'a doctor',
  patient: 'a patient',
  admin: 'an admin',
};

const ForbiddenPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, requiredRole, userRole } = location.state ?? {};

  const message = requiredRole
    ? `This page is only available to ${
        Array.isArray(requiredRole) ? requiredRole.map((r) => roleLabels[r] ?? r).join(' or ') : (roleLabels[requiredRole] ?? requiredRole)
      }.`
    : "You don't have permission to access this page.";

  return (
    <div className='h-[100dvh]'>
      <Text>403 - Forbidden</Text>
      <p>{message}</p>
      {from && <p className='text-sm text-gray-500'>Attempted page: {from}</p>}
      <Button onClick={() => navigate(homeRouteFor(userRole))}>Go back dashboard</Button>
    </div>
  );
};

const homeRouteFor = (role?: string) => {
  switch (role) {
    case 'doctor':
      return '/doctor/dashboard';
    case 'patient':
      return '/patient/dashboard';
    case 'admin':
      return '/admin/dashboard';
    default:
      return '/';
  }
};

export default ForbiddenPage;
