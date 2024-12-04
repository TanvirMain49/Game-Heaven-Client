import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo1 from "../assets/logo1.png";

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`navbar z-10 ${
        isHomePage
          ? "absolute top-0 left-0 bg-transparent text-white"
          : "bg-white text-black"
      } shadow-lg py-3 px-32`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addReview">Add Review</NavLink>
            <NavLink to="/myReview">My Review</NavLink>
            <NavLink to="/watchList">Game WatchList</NavLink>
          </ul>
        </div>

        <div className="flex items-center">
          <img src={logo1} alt="logo" className="w-20 h-20 absolute" />
          <a className="btn btn-ghost text-xl ml-14">Game Heaven</a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addReview">Add Review</NavLink>
          <NavLink to="/myReview">My Review</NavLink>
          <NavLink to="/watchList">Game WatchList</NavLink>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <NavLink className="btn bg-[#FF204E] text-white border-none">
          Log in
        </NavLink>
        <NavLink className="btn bg-[#FF204E] text-white border-none">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
