import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Component/Navbar/Navbar";
import LoginButton from "../Component/Shared/Signup/Login";
import LogoutButton from "../Component/Shared/Signup/Logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";
const clientId ="647740597373-ql9trbvgo0bmo3ma4m0nmcsv3l2g014u.apps.googleusercontent.com";

const Main = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <LoginButton />
      <LogoutButton />
      <Home />
    </div>
  );
};

export default Main;
