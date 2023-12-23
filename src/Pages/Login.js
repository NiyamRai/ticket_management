import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full  bg-turquoise h-[99.99vh] flex items-center justify-center">
      <div className="w-[70vw] h-[90vh] bg-[#EFEDED80] flex flex-col items-center pt-[11.5vh] gap-[8.5vh]">
        <h1 className="text-5xl font-bold">Helpdesk System</h1>

        <input
          type="text"
          className="py-[1.85vh] pl-[1.667vw] w-[41.5vw] text-3xl border-[1px] border-black"
          name=""
          id=""
          placeholder="Username"
        />
        <input
          type="text"
          className="py-[1.85vh] pl-[1.667vw] w-[41.5vw] text-3xl border-[1px] border-black"
          name=""
          id=""
          placeholder="Password"
        />

        <button className="h-[6.9vh] w-[22.29vw] bg-[#03CC17] text-white text-3xl rounded-lg">
          Sign In
        </button>
        <div className="flex w-[60%] items-center justify-between">
          <Link
            to={"/forgoten-password"}
            className="text-xl  cursor-pointer text-[#EA0000]">
            Forgot password
          </Link>
          <Link to={"/sign-up"} className="text-3xl cursor-pointer  ">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
