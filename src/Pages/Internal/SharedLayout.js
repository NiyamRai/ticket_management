import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../../Components/Navigation";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const navigate = useNavigate();
  const { role } = useSelector((store) => store.user);
  useEffect(() => {
    if (role === "") {
      navigate("/login");
    }
  }, [role]);
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
