
import { Link } from "react-router";
import "./Button.scss"


type Variant = 'primary' | 'secondary' | 'tertiary'

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  variant?: Variant;
  className?: string
  disabled?: boolean
  type?: "submit" | "button";
}

export const Button = ({ onClick, children, href, to, variant = 'primary', className, disabled, type = 'button' }: Props) => {
  const baseClass = `btn btn--${variant} ${className}`

  // React Router Link
  if (to) {
    return (
      <Link to={to} className={baseClass}>{children}</Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" className={baseClass}>{children}</a>
    )
  }

  return (
    <button onClick={onClick} type={type} className={baseClass} disabled={disabled}>
      {children}
    </button>
  )
}

