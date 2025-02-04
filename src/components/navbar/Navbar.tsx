import { Link } from 'react-router';
import rccLogo from '../../assets/rcc-logo.svg';

const NavLinks = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Book',
    to: '/appointment-scheduler',
  },
  {
    title: 'FAQ',
    to: '/faq',
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
    <nav className='h-16 bg-zinc-100'>
      <div className='flex h-full items-center justify-between px-40'>
        <Link to={'/'} className='text-3xl'>
          <img src={rccLogo} alt='rcc-logo' className='h-32 w-32' />
        </Link>
        <ul className='flex items-center gap-x-4 text-xl'>
          {NavLinks.map((link, index) => (
            <Link to={link.to} key={index}>
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
