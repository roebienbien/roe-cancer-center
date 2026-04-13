import "./PricingPlan.scss"
import PricingCard, { TPlan } from "./PricingCard";



const Plans: TPlan[] = [
  {
    title: "Basic Plan",
    price: 22,
    features: [
      "Access to core features",
      "Up to 5 active projects",
      "Email support",
      "Basic analytics dashboard",
      "Community access"
    ]
  },
  {
    title: "Business Plan",
    price: 67,
    features: [
      "Everything in Basic Plan",
      "Unlimited projects",
      "Priority email & chat support",
      "Advanced analytics & reports",
      "Team collaboration tools",
      "Custom integrations"
    ]
  },
  {
    title: "Enterprise Plan",
    price: 100,
    features: [
      "Everything in Business Plan",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom onboarding & training",
      "Enterprise-grade security",
      "API access & automation",
      "Custom feature requests"
    ]
  },
]


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
