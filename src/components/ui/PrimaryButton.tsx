import { twMerge } from 'tailwind-merge';

type Props = {
  text: string;
  className?: string;
  // onClick: () => void
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton = ({ text, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type='submit' //might make this dynamic
      className={twMerge(`hover: rounded-lg bg-pink-500 p-2 text-white shadow-xl hover:bg-pink-600 ${className}`)}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
