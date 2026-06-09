import { SiFacebook, SiX, SiInstagram, SiLinkedin } from 'react-icons/si';
import { IconType } from 'react-icons/lib';
import { Button } from '../ui/button/Button';
import FooterLinks, { TLinkList } from './FooterLinks';
import Text from '../ui/Text';

type TSocials = {
  name: string;
  icon: IconType;
  url: string;
  color: string;
};

const Socials: TSocials[] = [
  {
    name: 'twitter',
    icon: SiX,
    url: 'www.example.com',
    color: 'fill-[#000000]',
  },
  {
    name: 'facebook',
    icon: SiFacebook,
    url: 'www.example.com',
    color: 'fill-[#1877f2]',
  },
  {
    name: 'instagram',
    icon: SiInstagram,
    url: 'www.example.com',
    color: 'fill-[#FF0069]',
  },
  {
    name: 'linkedin',
    icon: SiLinkedin,
    url: 'www.example.com',
    color: 'fill-[#0a66c2]',
  },
];

const FooterLinkList: TLinkList[] = [
  {
    title: 'Navigation Links',
    links: [
      {
        name: 'Home',
        to: '/',
      },
      {
        name: 'About',
        to: '/',
      },
      {
        name: 'Services',
        to: '/',
      },
      {
        name: 'FAQ',
        to: '/',
      },
    ],
  },
  {
    title: 'Utility Links',
    links: [
      {
        name: 'Privacy Policy',
        href: 'https://www.example.com',
      },
      {
        name: 'Terms',
        href: 'https://www.example.com',
      },
      {
        name: 'FAQ',
        href: 'https://www.example.com',
      },
      {
        name: 'Help',
        href: 'https://www.example.com',
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className='h-[400px] bg-zinc-900 p-20 text-white'>
      <div className='grid h-full grid-cols-5'>
        <div className='col-span-3 flex flex-col gap-y-4'>
          <Text as='h3' variant='h1'>
            Ataraxis
          </Text>
          <Text className='max-w-96'>
            Lacus sed, quis vitae cursus tempor diam finibus tellus, dolor Morbi nec, vitae nunc ipsum, ultrices felis risus ac at.{' '}
          </Text>
          <div className='flex gap-x-4'>
            {Socials.map((social, index) => (
              <a href={social.url} key={index} className='rounded-full bg-zinc-50 p-2'>
                <social.icon size={20} className={`${social.color}`} />
              </a>
            ))}
          </div>
          <Button to='/' variant='secondary' className=''>
            Back to top
          </Button>
        </div>
        {FooterLinkList.map((link, index) => (
          <FooterLinks key={index} {...link} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
