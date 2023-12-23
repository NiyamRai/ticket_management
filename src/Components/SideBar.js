import React from "react";
import dashboard from "../img/DashboardLayout.svg";
import arrow from "../img/Arrow.svg";

const SideBar = () => {
  return (
    <div className=" w-[17.5vw] bg-mildGray h-[91.3vh] flex flex-col text-[1.8vw] font-normal items-center py-[30px]  min-w-max gap-[2.361vw]">
      <div className="flex items-center gap-[0.833vw] px-2">
        <span>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw]" />
        </span>
        <div className="w-[12vw] pr-[1vw] flex items-center justify-between min-w-max">
          <img src={dashboard} alt="" />
          <span>Dashboard</span>
        </div>
      </div>
      <div className="flex items-center gap-[0.833vw] px-2">
        <span>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw] opacity-0" />
        </span>
        <div className="w-[12vw] pr-[1vw] flex items-center justify-between min-w-max">
          <img src={dashboard} alt="" />
          <span>Dashboard</span>
        </div>
      </div>
      <div className="flex items-center gap-[0.833vw] px-2">
        <span>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw] opacity-0" />
        </span>
        <div className="w-[12vw] pr-[1vw] flex items-center justify-between min-w-max">
          <img src={dashboard} alt="" />
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
