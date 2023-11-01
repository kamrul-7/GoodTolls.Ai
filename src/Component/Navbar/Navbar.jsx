import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import Login from "../Shared/Signup/Login";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  console.log("state", isNavbarHidden);
  const handleNavLinkClick = () => {
    
    setIsNavbarHidden(!isNavbarHidden);
    console.log("handleNavlink", isNavbarHidden);
  };
  const toggle = () => {
    setIsNavbarHidden(false);
  };

  // useEffect(() => {
  //   setIsNavbarHidden(!isNavbarHidden);
  // }, []);
  // const toggleNavbar = () => {
    
  //   setIsNavbarHidden(!isNavbarHidden);
  //   console.log("togglebar", isNavbarHidden);
  // };
  const ourNavOption = (
    <>
      <li className=' font-paragraph md:px-6 md:py-3 navi'>

        <NavLink to="/" style={{ background: 'transparent', }} className={({ isActive }) => isActive ? "block remove" : "removes"}>
          {({ isActive }) => (
            <>
              <span className={`font-paragraph text-base ${isActive ? "text-[#2970FF] font-semibold" : "block hover:bg-transparent font-normal"}`}>AI Tools Finder</span>
              <hr className={isActive ? "border-[1.5px] rounded-full w-4 mx-auto border-[#2970FF]" : "hidden"} />
            </>
          )}

        </NavLink>
      </li>
      
      <li className=' md:px-6 md:py-3 navi'>
        <NavLink to="/news" style={{ background: 'transparent' }} className={({ isActive }) => isActive ? "block remove" : "removes"}>
          {({ isActive }) => (
            <>
              <span className={`font-paragraph text-base ${isActive ? "text-[#2970FF] font-semibold" : "block hover:bg-transparent font-normal"}`}>News</span>
              <hr className={isActive ? "border-[1.5px] rounded-full w-4 mx-auto border-[#2970FF]" : "hidden"} />
            </>
          )}

        </NavLink></li>
    </>
  );

  return (
    <div className="-ml-2 md:ml-2">
      <div className="p-0 md:p-[5px] navbar bg-base-100 ">
        <div className=" navbar-start">
          <Link to='/' className="w-[168px] h-[40px] flex items-center md:-ml-4 -ml-2">
            <img src="../../../public/logo.svg"/>
          </Link>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="flex px-1 text-base">
            {ourNavOption}
          </ul>
        </div>
        <div className="navbar-end">
          <div className='hidden lg:block'>
              <Login/>
          </div>

        </div>
        <div className="dropdown dropdown-end">
        <label onClick={toggle} tabIndex={0} className="hide-menu btn-ghost btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
      <ul tabIndex={0} className={`menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1 navi ${isNavbarHidden ? 'hidden' : ''} `}>
        <li className='mx-6 font-paragraph text-base font-normal'>
          <NavLink to="/" style={{ background: 'transparent' }} className={({ isActive }) => isActive ? "text-[#2970FF] p-0 hover:text-[#2970FF] font-paragraph font-normal text-base" : "p-0 font-paragraph font-normal text-base"} onClick={handleNavLinkClick}>
            AI Tools Finder
          </NavLink>
        </li>
        
        
        <li className='mx-6 navi'>
          <NavLink to="/news" style={{ background: 'transparent' }} className={({ isActive }) => isActive ? "text-[#2970FF] p-0 hover:text-[#2970FF] font-paragraph font-normal text-base" : "p-0 font-paragraph font-normal text-base"} onClick={handleNavLinkClick}>
            News
          </NavLink>
        </li>
        <li className='ml-4 mr-10'>
              <Login></Login>
            </li>
      </ul>
    </div>
      </div>
    </div >
  );
};

export default Navbar;
