import Typography from '@/components/ui/Typography';
import { Outlet } from 'react-router';

const DoctorLayout = () => {
  return (
    <div>
      <Typography>Doctor Layout</Typography>
      <Outlet />
    </div>
  );
};

export default DoctorLayout;
