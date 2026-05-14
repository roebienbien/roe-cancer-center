import { useGetAllPatientQuery } from './api/patient-api';
import CreatePatientForm from './CreatePatientForm';
import PatientDashBoard from './PatientDashBoard';

const CreatePatientPage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1>Register Patient Page</h1>
      <CreatePatientForm />
      <PatientDashBoard />
    </div>
  );
};

export default CreatePatientPage;
