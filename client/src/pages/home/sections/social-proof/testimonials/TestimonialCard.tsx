import Text from '@/components/ui/text/Text';
import { Quote } from 'lucide-react'
import './TestimonialCard.scss'
import UnsplashImage from '@/components/img/UnsplashImage';

export type TTestimonial = {
  name: string;
  role: string; // doctor, patient, etc
  message: string;
  imageUrl: string; //profile picture
}

const woman = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const TestimonialCard = ({ name, role, message, imageUrl }: TTestimonial) => {
  return (
    <div className='card'>
      <Quote />
      <div className="card__body">
        <Text>{message}</Text>
      </div>
      <div className='card__separator' />
      <div className='card__header'>
        <UnsplashImage className='card__image' src={woman} alt={''} />
        <div className='card__info'>
          <Text className='card__name'>{name}</Text>
          <Text className='card__role'>{role}</Text>
        </div>

      </div>
    </div>
  )
}

export default TestimonialCard
