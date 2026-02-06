import PrimaryLink from '../../components/ui/link/PrimaryLink';

const AppointmentScheduler = () => {
  // const [activeModal, setActiveModal] = useState<null | 'chemotherapy' | 'consultation'>(null);
  // const [selectedOption, setSelectedOption] = useState<string>('');
  // const closeModal = () => {
  //   setActiveModal(null);
  //   // setSelectedOption('');
  // };

  return (
    <div className='flex w-full'>
      <PrimaryLink to={'/chemotheraphy-scheduler'} text={'Schedule Now'} className='w-full text-xl font-bold' />
    </div>
  );
};

export default AppointmentScheduler;

{
  /* <Modal isOpen={activeModal === 'chemotherapy'} onClose={closeModal} title={'Chemotherapy Appointment Form'}>
        <ChemoAppointmentForm />
      </Modal> */
}
// <Modal isOpen={activeModal === 'consultation'} onClose={closeModal} title={'Consultation Appointment Form'}> <p>This is the content of the consultation modal</p>
// </Modal>
