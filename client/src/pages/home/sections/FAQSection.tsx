import { useState } from 'react';
import Accordion from '../../../components/Accordion';

export type TFaq = {
  question: string;
  answer: string;
};

const FAQs: TFaq[] = [
  {
    question: 'What services does Roe Cancer Clinic provide?',
    answer:
      'Roe Cancer Clinic offers comprehensive cancer care, including diagnostic imaging, personalized treatment plans (chemotherapy, radiation, immunotherapy), surgical consultations, and supportive care services such as nutrition counseling and psychological support.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer:
      'Appointments can be scheduled by calling our dedicated appointment line or through our online booking system available on our website. Our staff will assist you in selecting a convenient time and guide you through any necessary preparations.',
  },
  {
    question: 'What types of cancers do you treat?',
    answer:
      'We specialize in treating a wide range of cancers, including breast, lung, colorectal, prostate, gynecological cancers, hematologic malignancies (such as lymphoma and leukemia), and rare or complex cancers.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'Yes, Roe Cancer Clinic accepts most major insurance plans. We also offer financial counseling to help you understand your coverage and any potential out-of-pocket costs. Please contact our billing department for more details.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer:
      'During your initial visit, you will meet with our multidisciplinary team of specialists, undergo necessary diagnostic tests, review your medical history, and discuss your treatment options. We will provide guidance on what to expect during treatment and how to prepare.',
  },
  {
    question: 'Are there any support services available?',
    answer:
      'Yes, we offer various support services including patient support groups, counseling, nutritional and wellness guidance, and access to social workers and patient navigators to assist you throughout your treatment journey.',
  },
  {
    question: 'How can I get more information about your clinic?',
    answer:
      'For more detailed information, please visit our website, call our clinic, or contact our patient services team. We are here to answer any questions and provide the support you need.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-y-8'>
      <h2 className='text-xl font-semibold md:text-4xl'>Frequently Asked Questions</h2>
      <div className='flex flex-col'>
        {FAQs.map((faq, index) => (
          <Accordion key={index} faq={faq} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
