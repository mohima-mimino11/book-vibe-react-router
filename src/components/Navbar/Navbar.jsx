import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const links = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="listedbooks">Listed Books</NavLink></li>
      <li><NavLink to="dashboard">Pages To Read</NavLink></li>

  </>
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow work-sans text-lg font-semibold">
                {links}
          </ul>
      </div>
        <a className="btn btn-ghost work-sans text-3xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 work-sans text-lg font-semibold">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#59C6D2] px-7 py-5 rounded-lg text-white work-sans text-lg font-semibold">Sign Up</button>
        
      </div>
    </div>
  );
};

export default Navbar;