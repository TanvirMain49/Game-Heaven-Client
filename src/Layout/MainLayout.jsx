import React, { useContext } from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Footer from "../Pages/Footer";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const MainLayout = () => {
  const { dark, setDark } = useContext(AuthContext);
  return (
    <div className={`${dark && "dark"}`}>
      <div className={`font-poppins bg-neutral-100 dark:bg-black`}>
        <div className="md:w-11/12 mx-auto sticky top-0 z-50">
          <Header></Header>
        </div>
        <Outlet></Outlet>
          <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
