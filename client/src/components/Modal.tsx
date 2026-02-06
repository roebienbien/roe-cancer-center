import React, { useEffect } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup: Reset body overflow when the modal is unmounted or closed
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null; // should come after useEffect

  return (
    <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex w-full max-w-6xl flex-col gap-y-8 rounded-lg bg-white p-6 shadow-lg'>
        {/* Modal Header */}
        <div className='flex items-center justify-center border-b pb-3'>
          <h2 className='text-2xl font-bold'>{title}</h2>
        </div>
        {/* Modal Body */}
        <div>{children}</div>
        <div className='mt-6 text-right'>
          <button onClick={onClose} className='rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600'>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
