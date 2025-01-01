import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';
import AppointmentScheduler from './pages/appointment-page/AppointmentScheduler';

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
