import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const { user, signOutUser, setDark, dark } = useContext(AuthContext);
  const location = useLocation();
  const navigation = useNavigate();
  const handleLogOut = () => {
    signOutUser()
      .then((res) => {
        Swal.fire({
          title: "logged Out successfully",
          icon: "success",
        });
        navigation("/login");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  const handleDarkMod = () => {
    setDark(!dark);
  };

  const isTransparentNavbar = location.pathname === "/";

  return (
    <div
      className={`navbar z-10 ${
        isTransparentNavbar
          ? "absolute top-0 left-0 bg-transparent text-white"
          : "bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white"
      } shadow-sm py-3 md:px-32`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className={`btn bg-transparent ${isTransparentNavbar? " text-white": "text-black dark:text-white"} border-none  lg:hidden`}>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-1 text-black dark:text-white space-y-2"
          >
            <NavLink to="/" className="text-black">Home</NavLink>
            <NavLink to="/addReview" className="text-black">Add Review</NavLink>
            <NavLink to="/myReview" className="text-black">My Review</NavLink>
            <NavLink to="/watchList" className="text-black">Game WatchList</NavLink>
          </ul>
        </div>

        <Fade triggerOnce="true" direction="left" className="flex items-center">
          <div className="flex items-center">
            <img src={logo1} alt="logo" className="md:w-20 md:h-20 md:block hidden" />
            <a className="md:text-xl text-lg font-bold">Game Heaven</a>
          </div>
        </Fade>
      </div>

        <Fade cascade damping={0.2} triggerOnce="true">
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:pr-12 space-x-4 font-semibold items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allReviews">All Reviews</NavLink>
            {user && (
                <div className="space-x-4">
                  <NavLink to="/addReview">Add Review</NavLink>
                  <NavLink to="/myReview">My Review</NavLink>
                  <NavLink to="/watchList">Game WatchList</NavLink>
                </div>
            )}
          </ul>
      </div>
        </Fade>

      <div className="navbar-end items-center md:gap-2 md:ml-0 ">
        <Fade
          direction="right"
          triggerOnce="true"
          className="flex items-center gap-2"
        >
          <button onClick={handleDarkMod} className='form-control'>
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className={`toggle toggle-warning ${
                  dark ? "[--tglbg:gray]" : "[--tglbg:white]"
                }`}
                defaultChecked
              />
            </label>
          </button>
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt=""
                  className="md:w-16 md:h-16 w-14 h-14 rounded-full border-2 border-green-500 p-1"
                />
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-[#FF204E] text-white border-none md:w-[50%] w-16 whitespace-nowrap"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-[#FF204E] text-white border-none md:w-[50%] w-20"
              >
                Log in
              </Link>
              <NavLink
                to="/register"
                className="btn bg-[#FF204E] text-white border-none pt-4 md:block hidden"
              >
                Register
              </NavLink>
            </>
          )}
        </Fade>
      </div>
    </div>
  );
};

export default Header;
