import PatientDashBoard from './PatientDashBoard';
import PatientForm from './PatientForm';

const RegisterPatientPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-background'>
      <PatientForm />
      <PatientDashBoard />
    </div>
  );
};

export default RegisterPatientPage;
