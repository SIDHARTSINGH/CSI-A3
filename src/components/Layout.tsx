import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useAuthStore from "../store";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
