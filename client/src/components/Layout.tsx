import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <div className="scroll-smooth bg-zinc-50">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
