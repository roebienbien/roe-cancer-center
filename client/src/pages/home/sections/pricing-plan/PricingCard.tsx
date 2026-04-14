import Card from "@/components/card/Card"
import Text from "@/components/ui/text/Text"
import { Button } from "@/components/ui/button/Button"
import './PricingCard.scss'
import { CircleCheck, CircleX } from 'lucide-react'

type TFeature = {
  name: string;
  included: boolean;
}


export type TPlan = {
  title: string;
  price: number;
  features: TFeature[];
}

const PricingCard = ({ title, price, features }: TPlan) => {
  return (
    <Card variant="outlined" className='card'>
      <div className="card__header">
        {/* <h3 className="card__title">{plan.title}</h3> */}
        <Text as='h3'>{title}</Text>
        <Text variant="h1" className="card__price">${price}</Text>
        {/* <div className="card__price">${price}</div> */}
        <Button className="card__btn">Get Started</Button>
      </div>
      <div className="card__separator" />
      <ul className="card__list">
        {features.map((feat, index) => (
          <li key={index} className="card__item">
            {feat.included ?
              (<CircleCheck className="card__icon card__icon--check" size={16} />) :
              (<CircleX className="card__icon card__icon--x" size={16} />)
            }
            <span>{feat.name}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default PricingCard
