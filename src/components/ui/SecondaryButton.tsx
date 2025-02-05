import { twMerge } from 'tailwind-merge';

type Props = {
  text: string;
  className?: string;
  onClick: React.ReactEventHandler<HTMLButtonElement>;
};

const SecondaryButton = ({ text, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(`flex justify-center rounded-lg border border-pink-500 p-2 text-pink-500 shadow-xl hover:bg-gray-200 ${className}`)}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
