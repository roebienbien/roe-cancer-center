import './Testimonials.scss'
import Text from '@/components/ui/text/Text';
import { Quote } from 'lucide-react'

export type TTestimonial = {
  name: string;
  role: string; // doctor, patient, etc
  message: string;
  imageUrl: string; //profile picture
}

const TestimonialCard = ({ name, role, message, imageUrl }: TTestimonial) => {
  return (
    <div className='card'>
      <Quote />
      <div className="card__body">
        <Text>{message}</Text>
      </div>
      <div className='card__header'>
        {/* <div>{imageUrl}</div> */}

        <Text>{name}</Text>
        <Text>{role}</Text>

      </div>
    </div>
  )
}

export default TestimonialCard
