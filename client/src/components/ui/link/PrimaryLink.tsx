import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type Props = { to: string; text: string; className?: string };

const PrimaryLink = ({ to, text, className }: Props) => {
  return (
    <Link to={to} className={twMerge(`flex items-center justify-center rounded-xl bg-pink-500 p-4 text-white shadow hover:bg-pink-600 ${className}`)}>
      {text}
    </Link>
  );
};
export default PrimaryLink;
