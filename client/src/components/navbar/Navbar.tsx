import { Button } from '../ui/button/Button';
import './Navbar.scss';

const NavLinks = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Book',
    to: '/booking',
  },
  {
    title: 'Test',
    to: '/test',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'FAQ',
    to: '/faq',
  },
];

const Navbar = () => {
  return (
    <header className='z-99 fixed flex h-[80px] w-full justify-center bg-blue-200'>
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
          <Button>Login</Button>
          <Button variant='secondary'>Sign up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
