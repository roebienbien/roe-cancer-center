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
const defaultTag: Record<NonNullable<TextProps['variant']>, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  label: 'span',
};

const Text = ({ as: Tag = 'p', variant = 'body', children, className = '' }: TextProps) => {
  const ResolvedTag = Tag ?? defaultTag[variant];
  return <ResolvedTag className={twMerge(variants[variant], className)}>{children}</ResolvedTag>;
};

export default Text;
