import React from "react";

const StatististicsCard = ({ title, val, color }) => {
  console.log(color);
  return (
    <div
      className={`w-[250px] h-[270px] max-[720px]:h-[200px] max-[720px]:w-[200px]  flex flex-col items-center  py-[1.1vw] justify-between rounded-[1.4vw] max-[550px]:w-full`}
      // className={`w-[17.3vw] h-[18.7vw] flex flex-col items-center  py-[1.1vw] justify-between rounded-[1.4vw]`}
      style={{
        background: color,
        fontFamily: "Sanchez",
        boxShadow: "5px 7px 0px 0px rgb(158, 166, 161, 1)",
      }}>
      <h1 className="text-2xl capitalize w-[72%] text-center max-[720px]:text-xl ">
        {title}
      </h1>
      <div className="w-[60%] h-full flex items-center justify-center text-8xl max-[720px]:text-7xl  text-[#05386B]  ">
        {val}
      </div>
    </div>
  );
};

export default StatististicsCard;
