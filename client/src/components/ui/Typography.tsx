import { twMerge } from 'tailwind-merge';

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'label';
  children: React.ReactNode;
  className?: string;
};

const variants = {
  h1: 'text-3xl font-bold',
  h2: 'text-2xl font-semibold',
  h3: 'text-xl font-semibold',
  body: 'text-base',
  label: 'text-sm font-medium',
};

const Text = ({ as: Tag = 'p', variant = 'body', children, className = '' }: TextProps) => {
  return <Tag className={twMerge(variants[variant], className)}>{children}</Tag>;
};

export default Text;
