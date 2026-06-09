import { useState } from 'react';
import { Button } from '../primitives/button/Button';
import Text from '../primitives/Text';
import { FaCalendarCheck, FaFileMedical, FaUser } from 'react-icons/fa';
import { FaChevronLeft, FaGear, FaUserDoctor } from 'react-icons/fa6';

const sidebarLinks = [
  {
    title: 'Appointments',
    to: '/appointments',
    icon: FaCalendarCheck,
  },
  {
    title: 'Medical Records',
    to: '/records',
    icon: FaFileMedical,
  },
  {
    title: 'Doctors',
    to: '/doctors',
    icon: FaUserDoctor,
  },
  {
    title: 'Profile',
    to: '/profile',
    icon: FaUser,
  },
  {
    title: 'Settings',
    to: '/settings',
    icon: FaGear,
  },
];

const accountLinks = [
  {
    title: 'Login',
    to: '/login',
  },
  {
    title: 'Sign up',
    to: '/register',
  },
  {
    title: 'Logout',
    to: '/logout',
  },
];
type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
  const handleSidebar = () => {
    setIsSidebarOpen((prevMode: boolean) => !prevMode);
  };

  return (
    <aside className={`fixed z-[98] min-h-screen bg-blue-50 p-4 transition-all duration-300 ${isSidebarOpen ? 'w-[200px]' : 'w-[80px]'}`}>
      {/* <Text>Side bar</Text> */}
      <div className='mb-4 flex justify-between'>
        <Text as='h2' variant='h2'>
          RCC
        </Text>
        <Button onClick={handleSidebar} className=''>
          <FaChevronLeft className={`transition-transform duration-300 ${!isSidebarOpen ? 'rotate-180' : ''}`} />
        </Button>
      </div>
      <ul className='flex flex-col gap-4'>
        {sidebarLinks.map((nav, index) => (
          <Button key={index} to={nav.to} className={`flex h-10 items-center gap-x-2 ${isSidebarOpen ? 'w-40' : 'w-fit'}`}>
            <nav.icon />
            <span className={`${isSidebarOpen ? '' : 'hidden'}`}>{nav.title}</span>
          </Button>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
