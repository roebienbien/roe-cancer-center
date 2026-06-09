import Text from '@/components/ui/Text';
import { Outlet } from 'react-router';

const DoctorLayout = () => {
  return (
    <div>
      <Text>Doctor Layout</Text>
      <Outlet />
    </div>
  );
};

export default DoctorLayout;
