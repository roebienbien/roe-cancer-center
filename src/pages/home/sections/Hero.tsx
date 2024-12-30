import Carousel from '../../../components/carousel/Carousel';
import { TSlides } from '../../../components/carousel/CarouselSlide';

const Slides: TSlides[] = [
  {
    title: 'breast cancer',
    photoId: '1634383470810-521de548d774',
    // imgClassName: 'scale-x-[-1]'
    isFlipped: true,
  },
  {
    title: 'pedia cancer',
    photoId: '1578496781985-452d4a934d50',
    position: 'right',
  },
  {
    title: 'medicine',
    photoId: '1471864190281-a93a3070b6de',
    position: 'center',
  },
];

const Hero = () => {
  return (
    <div className='h-screen'>
      {/* <div className='mx-auto h-[600px] w-[500px] bg-blue-400'> */}
      <Carousel Slides={Slides} className='mx-auto w-11/12' />
      {/* </div> */}
    </div>
  );
};

export default Hero;
