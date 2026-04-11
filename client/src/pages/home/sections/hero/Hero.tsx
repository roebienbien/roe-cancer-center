// import Carousel from '../../../../components/carousel/Carousel';
// import { TSlides } from '../../../../components/carousel/CarouselSlide';
import { Button } from '@/components/ui/button/Button';
import rccJustLogo from '../../../../assets/rcc-just-logo.svg';
import "./Hero.scss"
import Stack from '@/components/stack/Stack';



// const Slides: TSlides[] = [
//   {
//     title: 'pedia cancer',
//     photoId: '1578496781985-452d4a934d50',
//     position: 'right',
//   },
//   {
//     title: 'breast cancer',
//     photoId: '1634383470810-521de548d774',
//     // imgClassName: 'scale-x-[-1]'
//     isFlipped: true,
//   },
//   {
//     title: 'medicine',
//     photoId: '1471864190281-a93a3070b6de',
//     position: 'center',
//   },
// ];

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__content'>
        <div className='hero__header'>
          <img src={rccJustLogo} alt='rcc-logo' className='hero__logo' />
          <h1 className='heading heading--1'>Roe Cancer Clinic</h1>
        </div>
        <Stack>
          <h2 className=''>Hi, What would you like to do today?</h2>
          <Button to='/book'> Book a schedule</Button>
        </Stack>
      </div>

      {/* <Carousel Slides={Slides} className='hero__carousel' /> */}
    </section>
  );
};

export default Hero;
