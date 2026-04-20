import Text from "../ui/text/Text"
import { SiFacebook, SiX, SiInstagram, SiLinkedin } from 'react-icons/si'
import { IconType } from "react-icons/lib";
import { Button } from "../ui/button/Button";
import "./Footer.scss"
import FooterLinks, { TLinkList } from "./FooterLinks";

type TSocials = {
  name: string;
  icon: IconType;
  url: string;
  color: string;
}

const Socials: TSocials[] = [
  {
    name: 'twitter',
    icon: SiX,
    url: 'www.example.com',
    color: "#000000",
  },
  {
    name: 'facebook',
    icon: SiFacebook,
    url: 'www.example.com',
    color: "#1877f2",
  },
  {
    name: 'instagram',
    icon: SiInstagram,
    url: 'www.example.com',
    color: "#FF0069",
  },
  {
    name: 'linkedin',
    icon: SiLinkedin,
    url: 'www.example.com',
    color: "#0a66c2",
  },
]


const FooterLinkList: TLinkList[] = [
  {
    title: "Navigation Links",
    links: [
      {
        name: "Home",
        to: '/'
      },
      {
        name: "About",
        to: '/'
      },
      {
        name: "Services",
        to: '/'
      },
      {
        name: "FAQ",
        to: '/'
      },
    ]
  },
  {
    title: "Utility Links",
    links: [
      {
        name: "Privacy Policy",
        href: 'https://www.example.com'
      },
      {
        name: "Terms",
        href: 'https://www.example.com'
      },
      {
        name: "FAQ",
        href: 'https://www.example.com'
      },
      {
        name: "Help",
        href: 'https://www.example.com'
      },
    ]
  }
]


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__grid">
        <div className="footer__content">
          <Text as='h3' variant="h1">Ataraxis</Text>
          <Text className="footer__description">Lacus sed, quis vitae cursus tempor diam finibus tellus, dolor Morbi nec, vitae nunc ipsum, ultrices felis risus ac at. </Text>
          <div className="footer__socials">
            {Socials.map((social, index) => (
              <a key={index} className="footer__social" style={{ "--icon-color": social.color } as React.CSSProperties}><social.icon size={20} />
              </a>
            ))}
          </div>
          <Button to="/" variant="secondary" className="footer__action">Back to top</Button>
        </div>
        {FooterLinkList.map((link, index) => (
          <FooterLinks key={index} {...link} />
        ))}
      </div>
    </div>
  )
}

export default Footer
