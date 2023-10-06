import { NavLink } from "react-router-dom";
import './Navbar.css';
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const ourNavOption = (
    <>
      <li className='mx-6'>

        <NavLink to="/" style={{background: 'transparent'}} className={({ isActive}) => isActive ? "block" : ""}>
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#2970FF] font-semibold" : "block"}>AI Tools Finder</span>
              <hr className={isActive ? "border-[1.5px] rounded-full w-4 mx-auto border-[#2970FF]" : "hidden"} />
            </>
          )}

        </NavLink>
      </li>
      <li className='mx-6'>
        <NavLink to="/" style={{background: 'transparent'}} className={({ isActive}) => isActive ? "block" : ""}>
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#2970FF] font-semibold" : "block"}>About</span>
              <hr className={isActive ? "border-[1.5px] rounded-full w-4 mx-auto border-[#2970FF]" : "hidden"} />
            </>
          )}

        </NavLink>
      </li>
      <li className='mx-6'>
        <NavLink to="/" style={{background: 'transparent'}} className={({ isActive}) => isActive ? "block" : ""}>
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#2970FF] font-semibold" : "block"}>Contact</span>
              <hr className={isActive ? "border-[1.5px] rounded-full w-4 mx-auto border-[#2970FF]" : "hidden"} />
            </>
          )}

        </NavLink></li>
      <li className='mx-6'>
      <NavLink to="/" style={{background: 'transparent'}} className={({ isActive}) => isActive ? "block" : ""}>
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#2970FF] font-semibold" : "block"}>News</span>
              <hr className={isActive ? "border-[1.5px] rounded-full w-4 mx-auto border-[#2970FF]" : "hidden"} />
            </>
          )}

        </NavLink></li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">GoodTools.ai</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            {ourNavOption}
          </ul>
        </div>
        <div className="navbar-end">
          <div className='hidden lg:block'>
            <button className="ai-btn ">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                <path d="M7.5541 0.605302C4.82073 1.5231 2.48951 3.53116 1.19509 6.06279C0.742668 6.93747 0.415921 7.86758 0.221129 8.82849C-0.275276 11.2185 0.0703225 13.7624 1.19509 15.9429C1.92399 17.3658 2.97335 18.6286 4.24264 19.6141C5.44281 20.5504 6.83777 21.2403 8.3207 21.6283C10.1869 22.1211 12.1788 22.1088 14.0639 21.6899C15.7668 21.308 17.3754 20.5073 18.6572 19.3492C20.0145 18.1235 20.9822 16.5158 21.4974 14.7849C22.0567 12.8939 22.1321 10.8797 21.7802 8.94553C18.2614 8.94553 14.7425 8.94553 11.2174 8.94553C11.2174 10.3746 11.2174 11.8098 11.2174 13.2388C13.2533 13.2388 15.2955 13.2388 17.3314 13.2388C17.0926 14.6124 16.2632 15.8629 15.0819 16.639C14.3404 17.1256 13.4921 17.4459 12.6124 17.5937C11.7264 17.7416 10.8153 17.76 9.93558 17.5876C9.03703 17.4151 8.18246 17.0455 7.43471 16.5281C6.24082 15.7089 5.3297 14.5016 4.86471 13.1526C4.38716 11.779 4.38088 10.2452 4.86471 8.87161C5.19774 7.90454 5.75699 7.00522 6.49217 6.27838C7.39701 5.36674 8.57204 4.71998 9.84133 4.45511C10.9284 4.2272 12.072 4.27032 13.1339 4.58446C14.0388 4.85549 14.8682 5.33595 15.5531 5.97655C16.2443 5.30515 16.9292 4.62758 17.6204 3.95617C17.9786 3.59275 18.3619 3.24781 18.7138 2.87207C17.6707 1.92348 16.4391 1.15967 15.1007 0.679219C12.7004 -0.201617 9.97957 -0.220097 7.5541 0.605302Z" fill="white" />
                <path d="M7.55414 0.60406C9.97961 -0.221339 12.7004 -0.20286 15.1133 0.671817C16.4517 1.15227 17.677 1.91607 18.7264 2.86467C18.3745 3.23425 17.9975 3.58535 17.633 3.94877C16.9418 4.62018 16.2569 5.29775 15.5657 5.96915C14.8808 5.32854 14.0514 4.84193 13.1466 4.57706C12.0846 4.26292 10.941 4.2198 9.85394 4.44771C8.58465 4.71257 7.40962 5.3655 6.50478 6.27098C5.7696 6.99782 5.21036 7.89713 4.87733 8.86421C3.65202 7.93409 2.42672 6.99782 1.20142 6.06771C2.48956 3.52991 4.82077 1.52185 7.55414 0.60406Z" fill="white" />
                <path d="M0.221129 8.8282C0.415921 7.86729 0.748952 6.93718 1.19509 6.0625C2.42039 6.99261 3.64569 7.92889 4.871 8.859C4.38716 10.2326 4.39344 11.7664 4.871 13.14C3.64569 14.0701 2.42039 15.0064 1.19509 15.9365C0.0703225 13.7683 -0.275276 11.2182 0.221129 8.8282Z" fill="white" />
                <path d="M11.2237 8.9375C14.7425 8.9375 18.2613 8.9375 21.7864 8.9375C22.1383 10.8716 22.0629 12.8859 21.5036 14.7769C20.9884 16.5078 20.0207 18.1216 18.6634 19.3412C17.4758 18.4357 16.282 17.5303 15.1006 16.6248C16.282 15.8548 17.1114 14.5983 17.3502 13.2246C15.3143 13.2246 13.2721 13.2246 11.2362 13.2246C11.2174 11.8018 11.2237 10.3727 11.2237 8.9375Z" fill="white" />
                <path d="M1.19531 15.941C2.42062 15.0109 3.64592 14.0746 4.87122 13.1445C5.33621 14.4997 6.24733 15.7008 7.44122 16.52C8.18896 17.0375 9.04354 17.4009 9.94209 17.5795C10.8218 17.752 11.7392 17.7335 12.6189 17.5857C13.4986 17.4378 14.3469 17.1175 15.0884 16.6309C16.276 17.5364 17.4698 18.4419 18.6512 19.3473C17.3693 20.5115 15.7607 21.3061 14.0579 21.688C12.1791 22.1069 10.1872 22.1192 8.31464 21.6264C6.83171 21.2384 5.43675 20.5485 4.23658 19.6122C2.97357 18.6205 1.92421 17.3578 1.19531 15.941Z" fill="white" />
              </svg> Login</button>
          </div>

        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {ourNavOption}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
