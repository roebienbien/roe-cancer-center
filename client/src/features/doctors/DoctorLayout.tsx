import Text from '@/components/primitives/Text';
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
