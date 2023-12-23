import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ForgotenPassword = () => {
  const navigate = useNavigate();
  const { role } = useSelector((store) => store.user);
  useEffect(() => {
    if (role !== "") {
      navigate("/");
    }
  }, [role]);
  return (
    <div className="w-full  bg-turquoise h-[99.99vh] flex items-center justify-center">
      <div className="w-[70vw] h-[90vh] bg-[#EFEDED80] flex flex-col items-center pt-[21.4vh] ">
        <span className="text-2xl text-center  w-[35vw]">
          Don’t worry, Enter your email below and we will send you a link to
          change password.
        </span>

        <input
          type="email"
          className="py-[1.85vh] pl-[1.667vw] w-[41.5vw] text-3xl border-[1px] border-black mt-[6vh]"
          name=""
          id=""
          placeholder="Email"
        />
        <button className="h-[6.9vh] w-[22.29vw] bg-[#03CC17] text-white text-3xl rounded-lg mt-[10vh]">
          Submit
        </button>
        <Link
          to={"/login"}
          className="h-[6.9vh] w-[22.29vw] bg-[#296EF2] text-white text-3xl rounded-lg mt-[4.4vh] flex items-center justify-center">
          Sign In
        </Link>
        {/* <div className="flex w-[60%] items-center justify-between">
          <Link
            to={"/forgoten-password"}
            className="text-xl  cursor-pointer text-[#EA0000]">
            Forgot password
          </Link>
          <Link to={"/sign-up"} className="text-3xl cursor-pointer  ">
            Sign Up
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ForgotenPassword;
