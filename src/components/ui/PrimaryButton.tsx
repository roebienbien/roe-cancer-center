import { twMerge } from "tailwind-merge";

const PrimaryButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={twMerge(`rounded-lg bg-rose-600 p-2 text-white ${className}`)}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
