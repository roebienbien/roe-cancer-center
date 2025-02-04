import Carousel from '../../../components/carousel/Carousel';
import { TSlides } from '../../../components/carousel/CarouselSlide';
import AppointmentScheduler from '../../appointment-page/AppointmentScheduler';
import rccJustLogo from '../../../assets/rcc-just-logo.svg';

const Slides: TSlides[] = [
  {
    title: 'pedia cancer',
    photoId: '1578496781985-452d4a934d50',
    position: 'right',
  },
  {
    title: 'breast cancer',
    photoId: '1634383470810-521de548d774',
    // imgClassName: 'scale-x-[-1]'
    isFlipped: true,
  },
  {
    title: 'medicine',
    photoId: '1471864190281-a93a3070b6de',
    position: 'center',
  },
];

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-start gap-y-8'>
      <div className='flex h-screen flex-col items-center justify-center gap-y-8'>
        <div className='flex flex-col items-center'>
          <img src={rccJustLogo} alt='rcc-logo' />
          <h1 className='text-4xl font-semibold'>Roe Cancer Clinic</h1>
        </div>
        <h2 className='text-xl'>Hi, What would you like to do today?</h2>
        <AppointmentScheduler />
      </div>
      <Carousel Slides={Slides} className='mx-auto w-11/12' />
    </div>
  );
};

export default Hero;
