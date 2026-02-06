import UnsplashImage from '../ui/UnsplashImage';

type TPosition = 'left' | 'center' | 'right';

export type TSlides = {
  title: string;
  photoId: string;
  position?: TPosition;
  isFlipped?: boolean;
};

function getPositionClass(position: 'left' | 'center' | 'right' | undefined) {
  switch (position) {
    case 'center':
      return 'left-1/2 -translate-x-1/2';
    case 'right':
      return 'right-20';
    case 'left':
      return 'left-20';
    default:
      return 'left-20';
  }
}

const CarouselSlide = ({ title, photoId, isFlipped, position }: TSlides) => {
  return (
    <div className='min-w-0 flex-[0_0_100%]'>
      <div className='relative flex h-full w-full flex-col'>
        <div className={`absolute top-1/2 z-20 h-[200px] w-[400px] -translate-y-1/2 bg-pink-400 ${getPositionClass(position)}`}>
          <span>{title}</span>
        </div>
        <UnsplashImage photoId={photoId} alt={'carousel-image'} isFlipped={isFlipped} />
      </div>
    </div>
  );
};

export default CarouselSlide;
