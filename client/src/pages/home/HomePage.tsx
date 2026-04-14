import Hero from "./sections/hero/Hero";
import './HomePage.scss'
import SocialProof from "./sections/social-proof/SocialProof";
import PricingPlan from "./sections/pricing-plan/PricingPlan";
import Testimonials from "./sections/social-proof/testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <PricingPlan />
      <Testimonials />
      {/* <UsersDashboard /> */}
      {/* <Treatments /> */}
      {/* <Locations /> */}
      {/* <FAQSection /> */}

      {/* <Counter /> */}
    </>
  );
}

export default HomePage;
