import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/home/HomePage';
import BookingPage from '@/features/booking/pages';
import LoginPage from '../features/auth/pages/LoginPage';
import Layout from '../components/layout/Layout';
import RegisterPage from '@/features/auth/pages/RegisterPage';
import { Dashboard } from '@/features/users/Dashboard';
import MyAppointmentsPage from '@/features/appointment/MyAppointmentPage';

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
