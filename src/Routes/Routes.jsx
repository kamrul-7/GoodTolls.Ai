
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import News from "../Pages/News/News";





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
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/news",
          element: <News/>
        },
        {
          path: "/privacypolicy",
          element: <PrivacyPolicy></PrivacyPolicy>
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