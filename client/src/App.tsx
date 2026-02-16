import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';
import AppointmentScheduler from './pages/appointment-page/AppointmentScheduler';
import ChemotheraphyScheduler from './pages/chemotherapy-scheduler/ChemotheraphyScheduler';
import HomePage from './pages/home/HomePage';
import UserPage from './pages/UserPage';

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
        path: '/chemotheraphy-scheduler',
        element: <ChemotheraphyScheduler />,
      },
      {
        path: '/appointment-scheduler',
        element: <AppointmentScheduler />,
      },
      {
        path: '/users/:id',
        element: <UserPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
