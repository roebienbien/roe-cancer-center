import { Button } from '@/components/ui/button/Button';
import Stack from '@/components/stack/Stack';
import Br from '@/components/ui/br/Br';
import UnsplashImage from '@/components/img/UnsplashImage';
import Text from '@/components/ui/Text';

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
//

const doctorPatient =
  'https://images.unsplash.com/photo-1631815590058-860e4f83c1e8?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Hero = () => {
  return (
    <section className='flex min-h-screen items-center justify-center'>
      <div className='flex items-center justify-center gap-10'>
        {/* <img src={rccJustLogo} alt='rcc-logo' className='hero__logo' /> */}
        <Stack className='gap-y-4'>
          <Text as='h1' variant='h1' className='text-6xl'>
            Get a professional <Br />
            diagnosis in your
            <Br />
            neighborhood
          </Text>
          <h2 className=''>
            Leading experts in all major fields are just around the corner <Br />
            Book your appointment today.
          </h2>
          <Button to='/book' className='w-fit'>
            {' '}
            Book an appointment{' '}
          </Button>
        </Stack>
        <UnsplashImage src={doctorPatient} alt={'doctor-and-patient'} className='h-[700px] w-[500px]' />
      </div>

      {/* <Carousel Slides={Slides} className='hero__carousel' /> */}
    </section>
  );
};

export default Hero;
