import React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      {/* Modal Content */}
      <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-lg'>
        {/* Modal Header */}
        <div className='flex items-center justify-between border-b pb-3'>
          <h2 className='text-lg font-bold'>{title}</h2>
          <button onClick={onClose} className='hover:text-800 text-gray-500'>
            &times;
          </button>
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
