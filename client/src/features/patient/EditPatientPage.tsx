import PatientForm from './PatientForm';
import PatientPage from './PatientPage';

const EditPatientPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-background'>
      <PatientForm mode='edit' />
      <PatientPage />
    </div>
  );
};

export default EditPatientPage;
