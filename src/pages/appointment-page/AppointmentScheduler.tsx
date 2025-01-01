import { useState } from 'react';
import ChemoAppointmentForm from '../../components/forms/chemo-form/ChemoAppointmentForm';
import Modal from '../../components/Modal';
import PrimaryButton from '../../components/ui/PrimaryButton';
import SecondaryButton from '../../components/ui/SecondaryButton';

const AppointmentScheduler = () => {
  const [activeModal, setActiveModal] = useState<null | 'chemotherapy' | 'consultation'>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const closeModal = () => {
    setActiveModal(null);
    setSelectedOption('');
  };

  return (
    <div className='flex'>
      <Modal isOpen={activeModal === 'chemotherapy'} onClose={closeModal} title={'Chemotherapy Appointment Form'}>
        <ChemoAppointmentForm selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </Modal>
      <Modal isOpen={activeModal === 'consultation'} onClose={closeModal} title={'Consultation Appointment Form'}>
        <p>This is the content of the consultation modal</p>
      </Modal>
      <div className='flex gap-4'>
        <PrimaryButton onClick={() => setActiveModal('chemotherapy')} text='Schedule a chemotherapy' />
        <SecondaryButton onClick={() => setActiveModal('consultation')} text='Schedule a consultation' />
      </div>
    </div>
  );
};

export default AppointmentScheduler;
