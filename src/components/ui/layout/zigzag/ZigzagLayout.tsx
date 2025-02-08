import SecondaryLink from '../../link/SecondaryLink';
import UnsplashImage from '../../UnsplashImage';

type TLink = {
  to: string;
  text: string;
};

type TData = {
  title: string;
  photoId: string;
  description?: string;
  link: TLink;
};

interface ZigzagLayoutProps {
  data: TData[];
}

const ZigzagLayout = ({ data }: ZigzagLayoutProps) => {
  return (
    <div className='flex flex-col gap-y-8'>
      {data.map((item, index) => (
        <div key={index} className={`${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex flex-col gap-6 p-4`}>
          <div className='h-[300px] w-full md:h-[700px] md:w-1/2'>
            <UnsplashImage photoId={item.photoId} alt={'image-to'} className='rounded-2xl' />
          </div>
          <div className={`flex w-full flex-col items-center gap-y-2 md:w-1/2 md:justify-center md:gap-y-4 ${index % 2 === 0 && 'md:items-start'}`}>
            <h2 className='text-lg font-bold lg:text-4xl'>{item.title}</h2>
            <p className='max-w-md lg:text-xl'>{item.description}</p>
            <SecondaryLink to={item.link.to} text={item.link.text} className='w-full md:w-80' />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ZigzagLayout;
