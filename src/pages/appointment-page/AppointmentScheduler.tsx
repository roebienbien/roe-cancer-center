import { useState } from 'react';
import ChemoAppointmentForm from '../../components/forms/chemo-form/ChemoAppointmentForm';
import Modal from '../../components/Modal';
import PrimaryButton from '../../components/ui/PrimaryButton';
import SecondaryButton from '../../components/ui/SecondaryButton';
import { Link } from 'react-router-dom';
import PrimaryLink from '../../components/ui/link/PrimaryLink';
import SecondaryLink from '../../components/ui/link/SecondaryLink';

const AppointmentScheduler = () => {
  const [activeModal, setActiveModal] = useState<null | 'chemotherapy' | 'consultation'>(null);
  // const [selectedOption, setSelectedOption] = useState<string>('');

  const closeModal = () => {
    setActiveModal(null);
    // setSelectedOption('');
  };

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
