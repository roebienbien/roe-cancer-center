import "./PricingPlan.scss"
import PricingCard, { TPlan } from "./PricingCard";



const Plans: TPlan[] = [
  {
    title: "Basic Plan",
    price: 22,
    features: [
      { name: "Projects", included: true },
      { name: "Analytics", included: true },
      { name: "Priority Support", included: false },
      { name: "Team Collaboration", included: false },
      { name: "Custom Reports", included: false },
    ]
  },
  {
    title: "Business Plan",
    price: 67,
    features: [
      { name: "Projects", included: true },
      { name: "Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Team Collaboration", included: true },
      { name: "Custom Reports", included: false },
    ]
  },
  {
    title: "Enterprise Plan",
    price: 100,
    features: [
      { name: "Projects", included: true },
      { name: "Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Team Collaboration", included: true },
      { name: "Custom Reports", included: true },
    ]
  },
];



const PricingPlan = () => {
  return (
    <div className="pricing-plan">
      <h2 className="heading  heading--1  pricing-plan__title">Simple and Transparent pricing <br /> for all business sizes</h2>
      <div className="pricing-plan__wrapper">
        {Plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  )
}

export default PricingPlan
