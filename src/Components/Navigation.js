import React from "react";
import mode from "../img/Mode.svg";
import notification from "../img/Notification.svg";
import user from "../img/User.svg";
import logout from "../img/Logout.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="bg-turquoise h-[90px] flex items-center px-6   justify-between">
      <h1 className="font-bold text-5xl text-white max-[720px]:text-3xl">
        HelpDesk
      </h1>
      <div className="flex items-center gap-[1.04vw]  w-[13.819vw] min-w-max max-[720px]:hidden">
        <img className="cursor-pointer" src={mode} alt="" />
        <img className="cursor-pointer" src={notification} alt="" />
        <img className="cursor-pointer" src={user} alt="" />
        <Link to={"/login"}>
          <img className="cursor-pointer" src={logout} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
