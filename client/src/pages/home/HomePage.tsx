import FAQSection from './sections/FAQSection';
import Hero from './sections/Hero';
import Locations from './sections/Locations';
import Treatments from './sections/Treatments';

function HomePage() {
  return (
    <>
      <Hero />
      <Treatments />
      <Locations />
      <FAQSection />

      {/* <Counter /> */}
    </>
  );
}

export default HomePage;
