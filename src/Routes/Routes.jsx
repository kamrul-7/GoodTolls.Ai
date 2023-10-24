
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Contact from "../Pages/Contact/Contact";
import News from "../Pages/News/NewsPage/News";
import About from "../Pages/About/About";
import AdminLogin from "../Admin/AdminLogin"
import Terms from "../Pages/Terms/Terms";
import SingleNews from"../Pages/SingleNews/SingleNews"
import Review from '../Pages/Review/Review'
import SingleTool from "../Pages/SingleTool.jsx/SingleTool";
import Test from "../test";
import Db from "../Admin/Db/Db"
import Dashboard from "../Admin/Dashboard/Dashboard";
import Category from "../Admin/Category/Category";
import Rating from "../Pages/Rating/Rating";
import Subcategory from "../Admin/Subcategoty/Subcategory";
import ManageTools from "../Admin/ManageTools/ManageTools";
import ManageNews from "../Admin/ManageNews/ManageNews";
import UserManagement from "../Admin/UserManagement/UserManagement";
import AddTool from "../Admin/AddTool/AddTool";
import AddNews from "../Admin/AddNews/AddNews";
import Default from "../Default";
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
        },
        {
          path:'/news/:id',
          element: <SingleNews></SingleNews>,
          loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
        },
        {
          path: '/review',
          element: <Review/>
        },
        {
          path: '/tool/:id',
          element: <SingleTool></SingleTool>,
          loader: ({ params }) => fetch(`http://localhost:3000/tools/${params.id}`)
        },
        {
          path: '/rating',
          element: <Rating/>
        },
      ]
      
    },
    {
      path: '/adminlogin',
      element: <AdminLogin></AdminLogin>
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'/dashboard/category',
          element:<Category></Category>
        },
        {
          path:'/dashboard/subcategory',
          element:<Subcategory/>
        },
        {
          path:'/dashboard/manageTools',
          element:<ManageTools/>
        },
        {
          path:'/dashboard/manageNews',
          element:<ManageNews/>
        },
        {
          path:'/dashboard/userManagement',
          element:<UserManagement/>
        },
        {
          path:'db',
          element:<Db></Db>
        },
        {
          path:'addtool',
          element:<AddTool></AddTool>
        },
        {
          path:'addnews',
          element:<AddNews></AddNews>
        }
      ]
    },
    {
      path: '*',
      element:<Default></Default>
    }
  ]);