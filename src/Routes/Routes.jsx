
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import About from "../Component/About/About";





export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <></>
        },
        {
          path: "/about",
          element: <About></About>
        }
      ]
      
    },
    {
      path: '/dashboard',
      element: <></>,
      children: [
      ]
    }
  ]);