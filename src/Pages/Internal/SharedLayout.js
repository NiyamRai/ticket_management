import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Navigation";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";

const SharedLayout = () => {
  return (
    <div className="h-full">
      <Navigation />
      <div className="flex h-max  w-full">
        <SideBar />
        <div className=" w-full h-[91.3vh] relative">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
