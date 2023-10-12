import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import AuthProvider from '../Pages/Context/AuthProvider';
const Main = () => {


  return (
    <div className="max-w-screen-xl mx-auto">
      <AuthProvider>
      <Navbar />
      <Outlet></Outlet>
      </AuthProvider>
    </div>
  );
};

export default Main;
