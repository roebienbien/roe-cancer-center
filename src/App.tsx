import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';
import AppointmentScheduler from './pages/appointment-page/AppointmentScheduler';
import ChemotheraphyScheduler from './pages/chemotherapy-scheduler/ChemotheraphyScheduler';
import HomePage from './pages/home/HomePage';

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
