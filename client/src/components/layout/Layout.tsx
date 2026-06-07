import { Outlet } from 'react-router';
import Navbar from '../navbar/Navbar';
import './Layout.scss';
import Footer from '../footer/Footer';
import Sidebar from './Sidebar';
import { useState } from 'react';
// import { Sidebar } from 'lucide-react';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className='app'>
      <Navbar />
      <main className='flex pt-[80px]'>
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-[200px]' : 'ml-[80px]'}`}>
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;
