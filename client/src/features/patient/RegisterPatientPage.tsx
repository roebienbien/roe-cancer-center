import PatientDashBoard from './PatientDashBoard';
import RegisterPatientForm from './RegisterPatientForm';

const RegisterPatientPage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-background'>
      <RegisterPatientForm />
      <PatientDashBoard />
    </div>
  );
};

export default RegisterPatientPage;
