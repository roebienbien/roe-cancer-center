import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type Props = { to: string; text: string; className?: string };

const SecondaryLink = ({ to, text, className }: Props) => {
  return (
    <Link
      to={to}
      className={twMerge(
        `flex items-center justify-center rounded-xl border border-pink-500 p-4 text-pink-500 shadow hover:bg-gray-100 ${className}`,
      )}
    >
      {text}
    </Link>
  );
};
export default SecondaryLink;
