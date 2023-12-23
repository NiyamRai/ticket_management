import React from "react";
import dashboard from "../img/DashboardLayout.svg";
import arrow from "../img/Arrow.svg";
import userLog from "../img/UserLog.svg";
import newTicket from "../img/NewTicket.svg";
import myTicket from "../img/TwoTickets.svg";
import Approval from "../img/Approval.svg";
import Performance from "../img/Performance.svg";
import Database from "../img/Database.svg";
import setting from "../img/Settings.svg";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  return (
    <div className=" w-[17.5vw] bg-mildGray  min-h-full flex flex-col text-[1.8vw] font-normal  py-[30px]  min-w-max gap-[2.361vw] max-[720px]:hidden">
      <Link to={"/"} className="flex items-center gap-[0.833vw] px-2">
        <span
          className={location?.pathname === "/" ? "opacity-100" : "opacity-0"}>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw]" />
        </span>
        <div className="w-[12vw] hover:scale-105 transition-all ease-in-out flex items-center justify-betwee  gap-[.5vw] min-w-max">
          <img src={dashboard} alt="" />
          <span className="w-3/4">Dashboard</span>
        </div>
      </Link>
      {/* Only Operation Tream */}
      <Link
        to={"/ticket-approval"}
        className="flex items-center gap-[0.833vw] px-2">
        <span
          className={
            location?.pathname === "/ticket-approval"
              ? "opacity-100"
              : "opacity-0"
          }>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw]" />
        </span>
        <div className="w-[12vw] hover:scale-105 transition-all ease-in-out flex items-center justify-betwee  gap-[.5vw] min-w-max">
          <img src={Approval} alt="" />
          <span className="w-3/4">Ticket Approval</span>
        </div>
      </Link>
      {/* Only for user */}
      <Link
        to={"/new-tickets"}
        className="flex items-center gap-[0.833vw] px-2">
        <span
          className={
            location?.pathname === "/new-tickets" ? "opacity-100" : "opacity-0"
          }>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw]" />
        </span>
        <div className="w-[12vw] hover:scale-105 transition-all ease-in-out flex items-center justify-betwee  gap-[.5vw] min-w-max">
          <img src={newTicket} alt="" />
          <span className="w-3/4">New Ticket</span>
        </div>
      </Link>
      {/* All Except Admin */}
      <Link to={"/my-tickets"} className="flex items-center gap-[0.833vw] px-2">
        <span
          className={
            location?.pathname === "/my-tickets" ? "opacity-100" : "opacity-0"
          }>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw]" />
        </span>
        <div className="w-[12vw] hover:scale-105 transition-all ease-in-out flex items-center justify-betwee  gap-[.5vw] min-w-max">
          <img src={myTicket} alt="" />
          <span className="w-3/4">My Ticket</span>
        </div>
      </Link>
      {/* Operation and technical support */}
      <Link
        to={"/performance"}
        className="flex items-center gap-[0.833vw] px-2">
        <span
          className={
            location?.pathname === "/performance" ? "opacity-100" : "opacity-0"
          }>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw]" />
        </span>
        <div className="w-[12vw] hover:scale-105 transition-all ease-in-out flex items-center justify-betwee  gap-[.5vw] min-w-max">
          <img src={Performance} alt="" />
          <span className="w-3/4">Performance</span>
        </div>
      </Link>
      {/* Only admin's */}
      <Link to={"/database"} className="flex items-center gap-[0.833vw] px-2">
        <span
          className={
            location?.pathname === "/database" ? "opacity-100" : "opacity-0"
          }>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw]" />
        </span>
        <div className="w-[12vw] hover:scale-105 transition-all ease-in-out flex items-center justify-betwee  gap-[.5vw] min-w-max">
          <img src={Database} alt="" />
          <span className="w-3/4">Databse</span>
        </div>
      </Link>

      <Link to={"/settings"} className="flex items-center gap-[0.833vw] px-2">
        <span
          className={
            location?.pathname === "/settings" ? "opacity-100" : "opacity-0"
          }>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw]" />
        </span>
        <div className="w-[12vw] hover:scale-105 transition-all ease-in-out flex items-center justify-betwee  gap-[.5vw] min-w-max">
          <img src={setting} alt="" />
          <span className="w-3/4">Setting</span>
        </div>
      </Link>

      <Link to={"/user-logs"} className="flex items-center gap-[0.833vw] px-2">
        <span
          className={
            location?.pathname === "/user-logsrea" ? "opacity-100" : "opacity-0"
          }>
          <img src={arrow} alt="" className="w-[0.83vw] h-[1.3vw]" />
        </span>
        <div className="w-[12vw] hover:scale-105 transition-all ease-in-out flex items-center justify-betwee  gap-[.5vw] min-w-max">
          <img src={userLog} alt="" />
          <span className="w-3/4">User Log History</span>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
