import Stack from '@/components/layout/Stack';
import UsersDashboard from '../UsersDashboard';
import FAQSection from './sections/FAQSection';
import Hero from './sections/Hero';
import Locations from './sections/Locations';
import Treatments from './sections/Treatments';

function HomePage() {
  return (
    <>
      <UsersDashboard />
      <Hero />
      <Stack >
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>

      </Stack >

      <Treatments />
      <Locations />
      <FAQSection />

      {/* <Counter /> */}
    </>
  );
}

export default HomePage;
