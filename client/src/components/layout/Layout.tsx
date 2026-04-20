import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import './Layout.scss'
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
