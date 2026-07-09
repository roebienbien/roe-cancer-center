import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'tertiary';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
  type?: 'submit' | 'button';
  isActive?: boolean;
};

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-white text-primary border border-primary hover:bg-gray-100',
  tertiary: 'text-primary hover:bg-gray-100',
};

export const Button = ({ onClick, children, href, to, variant = 'primary', className, disabled, type = 'button', isActive = false }: Props) => {
  const baseClass = twMerge(`border-1 p-2 text-center w-fit ${isActive ? 'bg-red-200 hover:bg-red-200' : variants[variant]} ${className}`);

  // React Router Link
  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target='_blank' className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} className={baseClass} disabled={disabled}>
      {children}
    </button>
  );
};
