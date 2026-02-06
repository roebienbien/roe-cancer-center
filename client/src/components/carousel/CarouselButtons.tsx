import React, { useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CarouselButtons = ({
  emblaApi,
  totalScroll,
  currentIndex,
  setCurrentIndex,
}: {
  emblaApi: any;
  totalScroll: number;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  // const [emblaRef, emblaApi] = useEmblaCarousel();
  // const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = useCallback(
    (direction: 'next' | 'prev') => {
      if (!emblaApi) return;

      setCurrentIndex((prevIndex) => {
        const newIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;

        if (newIndex < 0 || newIndex > totalScroll) return prevIndex;
        emblaApi.scrollTo(newIndex);
        return newIndex;
      });
    },
    [emblaApi],
  );
  return (
    <div className='absolute top-1/2 z-50 flex w-full -translate-y-1/2 justify-between'>
      <button
        onClick={() => handleScroll('prev')}
        disabled={currentIndex === 0}
        className='-ml-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-ml-6 sm:h-12 sm:w-12'
      >
        <FaChevronLeft className='fill-white' />
      </button>
      <button
        onClick={() => handleScroll('next')}
        disabled={currentIndex === totalScroll - 1}
        className='-mr-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-mr-6 sm:h-12 sm:w-12'
      >
        <FaChevronRight className='fill-white' />
      </button>
    </div>
  );
};

export default CarouselButtons;
