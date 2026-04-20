import { Button } from "../ui/button/Button";
import Text from "../ui/text/Text";
import './FooterLinks.scss'


type TFooterLink = {
  name: string;
  href?: string;
  to?: string;
}

export type TLinkList = {
  title: string;
  links: TFooterLink[]
}

const FooterLinks = ({ title, links }: TLinkList) => {
  return (
    <nav className="section">
      <Text className="heading section__heading">{title}</Text>
      <ul className="section__links">
        {links.map((link, index) => (
          <li key={index} className="section__item">
            {/* use spread to pass link props 
                rather than 
                <Button to={link.to} href={link.href}>
            */}
            <Button {...link} variant="tertiary" className="section__link">{link.name}</Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FooterLinks
