import { Outlet } from "react-router-dom";
import ModalContext from '../Pages/Context/modalContext';
import Navbar from "../Component/Navbar/Navbar";
import AuthProvider from '../Pages/Context/AuthProvider';
import { useState } from "react";


const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto hide-scrollbar h-screen overflow-y-scroll">
      <AuthProvider>
        <Navbar />
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
          <Outlet />
        </ModalContext.Provider>
      </AuthProvider>
    </div>
  );
};

export default Main;
