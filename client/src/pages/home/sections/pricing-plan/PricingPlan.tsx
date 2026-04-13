import Card from "@/components/card/Card";
import "./PricingPlan.scss"


type TPlan = {
  title: string;
  price: number;
  features: string[];
}

const Plans: TPlan[] = [
  {
    title: "Basic Plan",
    price: 22,
    features: ["features1", "features2", "features3"]
  },
  {
    title: "Business Plan",
    price: 67,
    features: ["features1", "features2", "features3"]
  },
  {
    title: "Enterprise Plan",
    price: 100,
    features: ["features1", "features2", "features3"]
  },
]




const PricingPlan = () => {
  return (
    <div className="pricing-plan">
      <h2 className="heading heading--2 pricing-plan__title">Simple and Transparent pricing <br /> for all business sizes</h2>
      <div className="pricing-plan__wrapper">
        {Plans.map((plan, index) => (
          <Card key={index} variant="outlined" className='card'>
            <h3>{plan.title}</h3>
            <div>{plan.price}</div>
            <div className="seperator-line" />
            <ul>
              {plan.features.map((feat, index) => (
                <li key={index}>{feat}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PricingPlan
