import useEmblaCarousel from 'embla-carousel-react';
import CarouselSlide, { TSlides } from './CarouselSlide';
import { useCallback, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

const Carousel = ({ Slides, className }: { Slides: TSlides[]; className: string }) => {
  const totalScroll = Slides.length - 1;
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className={twMerge(`relative ${className}`)}>
      <div ref={emblaRef} className='overflow-hidden'>
        <div className='flex h-[600px]'>
          {/* Slides */}
          {Slides.map((slide, index) => (
            <CarouselSlide {...slide} key={index} />
          ))}
        </div>
        {/* Buttons */}
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
            disabled={currentIndex === totalScroll}
            className='-mr-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-mr-6 sm:h-12 sm:w-12'
          >
            <FaChevronRight className='fill-white' />
          </button>
        </div>
        {/* Dots Navigation */}
        <div className='mt-4 flex justify-center gap-x-2'>
          {Array.from({ length: totalScroll + 1 }).map((_, index) => (
            <span
              key={index}
              // onClick={() => emblaApi?.scrollTo(index)}
              className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
