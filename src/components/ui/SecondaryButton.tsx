import { twMerge } from "tailwind-merge";

const SecondaryButton = ({ text, className }: { text: string; className?: string }) => {
  return <button className={twMerge(`border border-rose-500 text-rose-500 ${className}`)}>{text}</button>;
};

export default SecondaryButton;
