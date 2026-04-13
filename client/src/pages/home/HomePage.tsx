import Hero from "./sections/hero/Hero";
import './HomePage.scss'
import SocialProof from "./sections/social-proof/SocialProof";
import PricingPlan from "./sections/pricing-plan/PricingPlan";

function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <PricingPlan />
      {/* <UsersDashboard /> */}
      {/* <Treatments /> */}
      {/* <Locations /> */}
      {/* <FAQSection /> */}

      {/* <Counter /> */}
    </>
  );
}

export default HomePage;
