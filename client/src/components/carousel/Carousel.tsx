import useEmblaCarousel from 'embla-carousel-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import CarouselButtons from './CarouselButtons';
import CarouselDotNavigation from './CarouselDotNavigation';
import CarouselSlide, { TSlides } from './CarouselSlide';

type Props = { Slides: TSlides[]; className: string; showDot?: boolean };

const Carousel = ({ Slides, className, showDot = false }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={twMerge(`relative ${className}`)}>
      <div ref={emblaRef} className='overflow-hidden'>
        <div className='flex h-[400px]'>
          {/* Slides */}
          {Slides.map((slide, index) => (
            <CarouselSlide {...slide} key={index} />
          ))}
        </div>
        <CarouselButtons emblaApi={emblaApi} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} totalScroll={Slides.length} />
        {showDot && <CarouselDotNavigation Slides={Slides} currentIndex={currentIndex} />}
      </div>
    </div>
  );
};

export default Carousel;
