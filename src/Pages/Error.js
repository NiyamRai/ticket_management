import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center pt-[3.5vw] px-2 sanchez  bg-white pb-20">
      <h1 className=" text-4xl w-[68.333vw]">Error: Page Not Found</h1>
      <div className="mt-[2.571vh] w-[68.333vw]  flex flex-col items-center justify-center font-semibold text-skyBlue ">
        <Link to={"/"}>Go Back To Home</Link>
      </div>
    </div>
  );
};

export default Error;
