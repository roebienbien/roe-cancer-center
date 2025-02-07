import ZigzagLayout from '../../../components/ui/layout/zigzag/ZigzagLayout';

const TreatmentsData = [
  {
    title: 'Breast Cancer',
    photoId: '1651066377565-f99cf3c3a329',
    description:
      'At Roe Cancer Clinic, our dedicated Breast Cancer team uses cutting-edge technology and personalized care to ensure the best outcomes for every patient.',
    link: { to: '/breast-cancer', text: 'Learn More' },
  },
  {
    title: 'Medical Oncology',
    photoId: '1603711549213-768a23c97437',
    description:
      'Our Medical Oncology department delivers advanced, evidence-based treatment plans that are tailored to your needs, providing you with exceptional care and support.',
    link: { to: '/medical-oncology', text: 'Learn More' },
  },
  {
    title: 'Pediatric Oncology',
    photoId: '1578496781197-b85385c7f0b3',
    description:
      'Specializing in Pediatric Oncology, Roe Cancer Clinic offers gentle, state-of-the-art treatment in a family-centered environment, ensuring the highest standard of care for our youngest patients.',
    link: { to: '/pediatric-oncology', text: 'Learn More' },
  },
];

const Treatments = () => {
  return (
    <div className='my-20 min-h-screen lg:px-20'>
      <ZigzagLayout data={TreatmentsData} />
    </div>
  );
};
export default Treatments;
