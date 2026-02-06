import UnsplashImage from '../UnsplashImage';

export type CardProps = {
  title: string;
  subtitle?: string;
  img: string;
};

const Card = ({ title, img }: CardProps) => {
  return (
    <div className='relative h-[340px] overflow-hidden rounded-xl shadow-xl group-hover:scale-105 md:h-[480px] lg:h-auto'>
      {/* Background Image */}
      <UnsplashImage
        photoId={img}
        alt='location-image'
        className='h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105'
      />

      {/* Dark Gradient Overlay */}
      <div className='absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/90 to-transparent'></div>

      {/* Text Content */}
      <div className='absolute bottom-4 left-4 flex cursor-default flex-col text-2xl font-bold text-white'>
        <span>Roe Cancer Center</span>
        <span className='text-xl font-medium'>{title}</span>
      </div>
    </div>
  );
};
export default Card;
