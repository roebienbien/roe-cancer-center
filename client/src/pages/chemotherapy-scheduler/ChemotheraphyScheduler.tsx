import ChemoAppointmentForm from '../../components/forms/chemo-form/ChemoAppointmentForm';

const ChemotheraphyScheduler = () => {
  return (
    <div className='mt-10 flex min-h-screen flex-col items-center justify-start gap-y-4'>
      <div className='flex flex-col items-center rounded-2xl border-2 bg-zinc-50 p-10 shadow-lg'>
        <h2 className='text-3xl font-bold'>Chemotherapy Form</h2>
        <ChemoAppointmentForm />
      </div>
    </div>
  );
};
export default ChemotheraphyScheduler;
