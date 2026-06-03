import { Button } from '@/components/ui/button/Button';
import Typography from '@/components/ui/Typography';
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
      <Typography>Patient Page</Typography>
      <div className='flex w-full bg-red-100'>
        {/* SIDEBAR */}
        <div className='p-10'>
          <Typography>Side bar</Typography>
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
