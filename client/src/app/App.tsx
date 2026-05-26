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
        path: '/doctor',
        // path: '/patient/register',
        element: <RegisterDoctorPage />,
      },
      // {
      //   path: '/chemotheraphy-scheduler',
      //   element: <ChemotheraphyScheduler />,
      // },
      // {
      //   path: '/appointment-scheduler',
      //   element: <AppointmentScheduler />,
      // },
      // {
      //   path: '/users/:id',
      //   element: <UserPage />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
