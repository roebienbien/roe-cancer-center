import { useParams } from 'react-router';
import { Button } from '../ui/button/Button';
import './Navbar.scss';
import { useLogoutMutation } from '@/features/auth/api/auth-api';

const NavLinks = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Users',
    to: '/users',
  },
  {
    title: 'DPatient ',
    to: '/patients/new',
  },
  {
    title: 'Patient',
    to: `/patients/`,
  },
  {
    title: 'Doctor',
    to: '/doctors',
  },
  {
    title: 'Appointment',
    to: '/appointments',
  },
];
const Navbar = () => {
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      console.log('user logged out');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className='fixed z-[999] flex h-[80px] w-full justify-center bg-blue-200'>
      <nav className='flex w-[80%] items-center justify-between'>
        <Button to={'/'} variant='tertiary' className='text-xl'>
          {/* <img src={rccLogo} alt='rcc-logo' className='text-sm' height={10} width={10} /> */}
          Logo
        </Button>
        <ul className='flex gap-x-2'>
          {NavLinks.map((link, index) => (
            <li key={index} className=''>
              <Button to={link.to} key={index} variant='tertiary'>
                {link.title}
              </Button>
            </li>
          ))}
        </ul>
        <div className='flex gap-x-2'>
          <Button to='/login'>Login</Button>
          <Button to={'/register'} variant='secondary'>
            Sign up
          </Button>
          <Button onClick={handleLogout} disabled={isLoading} variant='secondary'>
            Log out
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
