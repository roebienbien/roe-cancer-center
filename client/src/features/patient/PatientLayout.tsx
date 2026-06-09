import { Button } from '@/components/primitives/button/Button';
import Text from '@/components/primitives/Text';
import { Outlet } from 'react-router';

const PatientLayout = () => {
  const sidebarLinks = [
    {
      title: 'Appointments',
      to: '/:id',
    },
    {
      title: 'Medical Records',
      to: '/:id',
    },
    {
      title: 'Doctors',
      to: '/:id',
    },
    {
      title: 'Profile',
      to: 'profile/new',
    },
    {
      title: 'Settings',
      to: '/:id',
    },
  ];
  return (
    <div className='min-h-screen'>
      <Text>Patient Page</Text>
      <div className='flex w-full bg-red-100'>
        {/* SIDEBAR */}
        <div className='p-10'>
          <Text>Side bar</Text>
          <ul className='flex flex-col gap-4'>
            {sidebarLinks.map((nav, index) => (
              <Button key={index} to={`/patients/me/${nav.to}`}>
                {nav.title}
              </Button>
            ))}
          </ul>
        </div>

        {/* CONTENT */}
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
      <div>This is Patient Footer</div>
    </div>
  );
};

export default PatientLayout;
