import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/home/HomePage';
import BookingPage from '@/features/booking/pages';
import LoginForm from './features/auth/components/LoginForm';

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
        path: '/booking',
        element: <BookingPage />
      },
      {
        path: '/test',
        element: <LoginForm />
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
