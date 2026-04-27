import { Link } from 'react-router';
import rccLogo from '../../assets/rcc-logo.svg';
import { Button } from '../ui/button/Button';
import './Navbar.scss'

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
    <header className='header'>
      <nav className='header__nav'>
        <Link to={'/'} className='header__logo' >
          <img src={rccLogo} alt='rcc-logo' className='header__logo-img' />
        </Link>
        <ul className='header__list'>
          {NavLinks.map((link, index) => (
            <li key={index} className='header__item'>
              <Link to={link.to} key={index} className='header__link'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className='header__actions'>
          <Button>Login</Button>
          <Button variant='secondary'>Sign up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
