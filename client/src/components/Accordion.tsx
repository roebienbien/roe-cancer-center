import { FaPlus } from 'react-icons/fa';
import { TFaq } from '../pages/home/sections/FAQSection';

interface Props {
  faq: TFaq;
  isOpen: boolean;
  onToggle: any;
}

const Accordion = ({ faq, isOpen, onToggle }: Props) => {
  return (
    <button
      onClick={onToggle}
      className={`group flex w-full max-w-5xl flex-col items-center justify-between border border-gray-200 px-4 py-6 text-xs transition-colors ${isOpen ? 'bg-white' : ''}`}
    >
      <div className='flex w-full items-center justify-between text-start'>
        <span className='text-sm font-semibold md:text-xl'>{faq.question}</span>
        <span
          className={`transform text-sm text-gray-400 transition-transform group-hover:text-black md:text-xl ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        >
          <FaPlus />
        </span>
      </div>
      <div
        className={`grid w-full justify-items-start overflow-hidden text-sm transition-all duration-300 ease-in-out md:text-base ${
          isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='flex flex-col justify-items-start overflow-hidden'>
          <span className='text-start'>{faq.answer}</span>
        </div>
      </div>
    </button>
  );
};

export default Accordion;
