import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import AuthProvider from '../Pages/Context/AuthProvider';
import './Main.css'
import Footer from "../Component/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const Main = () => {
  // Get the current location using the useLocation hook
  const location = useLocation();

  // Determine the condition to hide the footer (e.g., on the home page)
  const isHomePage = location.pathname === '/';
  const tmpStoreKey = 'ToolsFinder(GoodToolsAi)AdminPanelUser'
  sessionStorage.removeItem(tmpStoreKey)

  return (
    <div>
      <div className="h-screen overflow-y-scroll hide-scrollbar">
        <AuthProvider>
          <ToastContainer />
          <div className="max-w-screen-xl mx-auto">
            <div className="md:mt-[26px] mt-1 mx-4 md:mx-0">
              <Navbar />
            </div>
            <div className="">
              <Outlet />
            </div>
          </div>
          {/* Conditionally render the Footer based on the condition */}
          {!isHomePage && <Footer />}
        </AuthProvider>
      </div>
    </div>
  );
};

export default Main;
