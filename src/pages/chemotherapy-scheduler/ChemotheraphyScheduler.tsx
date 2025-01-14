import ChemoAppointmentForm from '../../components/forms/chemo-form/ChemoAppointmentForm';

const ChemotheraphyScheduler = () => {
  return (
    <div className='mt-10 flex h-screen flex-col items-center justify-start gap-y-4'>
      <h2 className='text-3xl font-bold'>Chemotherapy Form</h2>
      <ChemoAppointmentForm />
    </div>
  );
};
export default ChemotheraphyScheduler;
