import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import AuthProvider from '../Pages/Context/AuthProvider';
import './Main.css'
const Main = () => {


  return (
    <div className="max-w-screen-xl mx-auto h-screen overflow-y-scroll hide-scrollbar">
      <AuthProvider>
      <Navbar />
      <Outlet></Outlet>
      </AuthProvider>
    </div>
  );
};

export default Main;
