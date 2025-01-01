import { useState } from 'react';
import Modal from '../../components/Modal';
import Dropdown from '../../components/ui/Dropdown';
import PrimaryButton from '../../components/ui/PrimaryButton';
import SecondaryButton from '../../components/ui/SecondaryButton';
import Input from '../../components/ui/Input';

const Cars = [
  { text: 'Volvo', value: 'volvo' },
  { text: 'Bmw', value: 'bmw' },
  { text: 'Audi', value: 'audi' },
];

const AppointmentScheduler = () => {
  const [activeModal, setActiveModal] = useState<null | 'chemotherapy' | 'consultation'>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const closeModal = () => {
    setActiveModal(null);
    setSelectedOption('');
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`You selected ${selectedOption}`);
  };

  return (
    <div className='flex'>
      <div>
        <Modal isOpen={activeModal === 'chemotherapy'} onClose={closeModal} title={'This is Modal'}>
          <p>This is the content of the chemotherapy modal</p>
          <form onSubmit={handleSubmit}>
            <Dropdown options={Cars} selectedValue={selectedOption} onChange={handleOptionChange} placeholder='cars' />
            {/* <Input className={''} type='submit' value='Submit' /> */}
            <Input label={'Email'} placeholder='Enter email' />
            <PrimaryButton text='Submit' />
          </form>
        </Modal>
        <Modal isOpen={activeModal === 'consultation'} onClose={closeModal} title={'This is Modal'}>
          <p>This is the content of the consultation modal</p>
        </Modal>
      </div>
      <div className='flex gap-4'>
        <PrimaryButton onClick={() => setActiveModal('chemotherapy')} text='Schedule a chemotherapy' />
        <SecondaryButton onClick={() => setActiveModal('consultation')} text='Schedule a consultation' />
      </div>
      {/* <SchedulingForm /> */}
    </div>
  );
};

export default AppointmentScheduler;
