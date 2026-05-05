import { Button } from '../ui/button/Button';
import Typography from '../ui/Typography';

type TFooterLink = {
  name: string;
  href?: string;
  to?: string;
};

export type TLinkList = {
  title: string;
  links: TFooterLink[];
};

const FooterLinks = ({ title, links }: TLinkList) => {
  return (
    <nav className=''>
      <Typography className='font-medium'>{title}</Typography>
      <ul className=''>
        {links.map((link, index) => (
          <li key={index} className=''>
            {/* use spread to pass link props 
                rather than 
                <Button to={link.to} href={link.href}>
            */}
            <Button {...link} variant='tertiary' className='p-0 text-sm text-white'>
              {link.name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;
