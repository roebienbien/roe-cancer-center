import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../features/auth/pages/LoginPage';
import Layout from '../components/layout/Layout';
import RegisterPage from '@/features/auth/pages/RegisterPage';
import { Dashboard } from '@/features/users/Dashboard';
import MyAppointmentsPage from '@/features/appointments/MyAppointmentPage';
import RegisterDoctorPage from '@/features/doctors/RegisterDoctorPage';
import RegisterPatientPage from '@/features/patient/RegisterPatientPage';
import EditPatientPage from '@/features/patient/EditPatientPage';
import PatientPage from '@/features/patient/PatientPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/appointments',
        element: <MyAppointmentsPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/users',
        element: <Dashboard />,
      },
      {
        path: '/patient',
        // path: '/patient/register',
        element: <RegisterPatientPage />,
      },
      {
        path: '/patients',
        // element: <RegisterPatientPage />,
        children: [
          {
            path: 'new',
            element: <RegisterPatientPage />,
          },
          {
            path: ':patientId',
            element: <PatientPage />,
          },
          {
            path: ':patientId/edit',
            element: <EditPatientPage />,
          },
        ],
      },
      {
        path: '/doctor',
        // path: '/patient/register',
        element: <RegisterDoctorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
