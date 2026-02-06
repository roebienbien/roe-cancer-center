import { Link } from 'react-router';
import rccLogo from '../../assets/rcc-logo.svg';
import PrimaryLink from '../ui/link/PrimaryLink';
import SecondaryLink from '../ui/link/SecondaryLink';

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
    // <nav className='sticky top-0 z-0 h-16 bg-zinc-100 shadow-md'>
    <nav className='h-16 bg-zinc-100 shadow-md'>
      <div className='flex h-full items-center justify-between px-40'>
        <Link to={'/'} className='text-3xl'>
          <img src={rccLogo} alt='rcc-logo' className='h-32 w-32' />
        </Link>
        <ul className='flex items-center gap-x-8 text-xl'>
          {NavLinks.map((link, index) => (
            <Link to={link.to} key={index} className=''>
              {link.title}
            </Link>
          ))}
        </ul>
        {/* <PrimaryButton text={'Schedule now'} className='px-4 py-3 text-base font-bold' /> */}
        <div className='flex gap-x-4'>
          <PrimaryLink to={'/login'} text={'Login'} className='h-12 w-24' />
          <SecondaryLink to={'/sign-up'} text={'Sign up'} className='h-12 w-24' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
