import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../features/auth/pages/LoginPage';
import Layout from '../components/layout/Layout';
import RegisterPage from '@/features/auth/pages/RegisterPage';
import { UserDashboard } from '@/features/users/UserDashboard';
import MyAppointmentsPage from '@/features/appointments/MyAppointmentPage';
import RegisterDoctorPage from '@/features/doctors/RegisterDoctorPage';
import RegisterPatientPage from '@/features/patient/RegisterPatientPage';
import EditPatientPage from '@/features/patient/EditPatientPage';
import PatientPage from '@/features/patient/PatientProfilePage';
import EditDoctorPage from '@/features/doctors/EditDoctorPage';
import DoctorPage from '@/features/doctors/DoctorPage';
import DoctorLayout from '@/features/doctors/DoctorLayout';
import DoctorDashboard from '@/features/doctors/DoctorDashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import ForbiddenPage from '@/pages/ForbiddenPage';
import PatientLayout from '@/features/patient/PatientLayout';
import PatientProfilePage from '@/features/patient/PatientProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <Layout />,
    children: [
      {
        index: true,
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
        element: <UserDashboard />,
        children: [],
      },
      {
        path: '/users/:id',
        element: <PatientProfilePage />,
      },
      {
        element: <ProtectedRoute allowedRoles={['PATIENT', 'DOCTOR']} />,
        children: [
          {
            path: 'patients/me',
            element: <PatientLayout />,
            children: [
              {
                path: 'profile',
                element: <PatientProfilePage />,
              },
              {
                path: 'profile/new',
                element: <RegisterPatientPage />,
              },
              {
                path: 'profile/edit',
                element: <EditPatientPage />,
              },
              // { index: true, element: <PatientAppointments /> },
              // { path: 'records', element: <MedicalRecords /> },
              // { path: 'doctors', element: <DoctorsPage /> },
              // { path: 'settings', element: <SettingsPage /> },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={['PATIENT', 'DOCTOR']} />,
        children: [
          {
            path: '/doctors',
            element: <DoctorLayout />,
            children: [
              {
                // path: 'new',
                index: true,
                element: <DoctorDashboard />,
              },
              {
                path: 'new',
                element: <RegisterDoctorPage />,
              },
              {
                path: ':doctorId',
                element: <DoctorPage />,
              },
              {
                path: ':doctorId/edit',
                element: <EditDoctorPage />,
              },
            ],
          },
        ],
      },
      {
        path: '/forbidden',
        // path: '/patient/register',
        element: <ForbiddenPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
