import './Text.scss'

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'label';
  children: React.ReactNode;
  className?: string;
}

const Text = ({ as: Tag = 'p', variant = 'body', children, className = '' }: TextProps) => {
  return (
    <Tag className={`text text--${variant} ${className}`}>{children}</Tag>
  )
}

export default Text
