
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Contact from "../Pages/Contact/Contact";
import News from "../Pages/News/NewsPage/News";
import About from "../Pages/About/About";
import Terms from "../Pages/Terms/Terms";
import NewsCard from "../Pages/News/NewsCard/NewsCard";
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
          element: <News></News>
        },
        {
          path: "/privacypolicy",
          element: <PrivacyPolicy/>
        },
        {
          path: "/termsofservice",
          element: <Terms></Terms>
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