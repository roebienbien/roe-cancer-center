const CarouselDotNavigation = ({ Slides, currentIndex }: { Slides: {}[]; currentIndex: number }) => {
  return (
    <div className='mt-4 flex justify-center gap-x-2'>
      {Slides.map((_, index) => (
        <span
          key={index}
          // onClick={() => emblaApi?.scrollTo(index)}
          className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
        ></span>
      ))}
    </div>
  );
};

export default CarouselDotNavigation;
