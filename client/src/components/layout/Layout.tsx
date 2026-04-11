import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import './Layout.scss'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
