import Text from '@/components/ui/text/Text'
import './Testimonials.scss'
import TestimonialCard, { TTestimonial } from './TestimonialCard';
import Stack from '@/components/stack/Stack';



const TestimonialList: TTestimonial[] = [
  {
    name: "Maria Santos",
    role: "Cancer Survivor",
    message:
      "The care I received at Roe Cancer Clinic was life-changing. The staff treated me with compassion and guided me through every step of my treatment.",
    imageUrl: "/images/patients/maria.jpg",
  },
  {
    name: "John Dela Cruz",
    role: "Patient",
    message:
      "From diagnosis to recovery, I always felt supported. The doctors explained everything clearly and made me feel safe.",
    imageUrl: "/images/patients/john.jpg",
  },
  {
    name: "Dr. James Cruz",
    role: "Oncologist",
    message:
      "Roe Cancer Clinic prioritizes patient-centered care. It’s a privilege to work with a team that values compassion and excellence.",
    imageUrl: "/images/doctors/james.jpg",
  },
  {
    name: "Anna Reyes",
    role: "Breast Cancer Survivor",
    message:
      "I’m forever grateful for the support I received. The staff treated me like family during the hardest time of my life.",
    imageUrl: "/images/patients/anna.jpg",
  },
  {
    name: "Michael Tan",
    role: "Caregiver",
    message:
      "The clinic provided not just treatment but hope. They helped my mother feel comfortable and cared for throughout her journey.",
    imageUrl: "/images/patients/michael.jpg",
  },
  {
    name: "Dr. Elena Garcia",
    role: "Radiologist",
    message:
      "A highly professional environment with advanced equipment and a truly compassionate team focused on patient outcomes.",
    imageUrl: "/images/doctors/elena.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <Text className='testimonials__subtitle'>Testimonials</Text>
      <Text as='h2' variant='h1' className='testimonials__title'>Our Trusted Clients</Text>
      <div className='testimonials__grid'>
        {TestimonialList.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
