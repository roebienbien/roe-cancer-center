import PatientForm from './PatientForm';

const EditPatientPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-background'>
      <PatientForm mode='edit' />
    </div>
  );
};

export default EditPatientPage;
