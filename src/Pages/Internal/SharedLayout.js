import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Navigation";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";

const SharedLayout = () => {
  return (
    <div className="h-full">
      <Navigation />
      <div className="flex  h-full   w-full">
        <SideBar />
        <div className=" w-full  ">
          <div className="min-h-[99vh]">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
