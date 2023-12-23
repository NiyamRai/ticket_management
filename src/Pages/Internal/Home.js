import React from "react";
import StatististicsCard from "../../Components/StatististicsCard";
import graph from "../../img/Graph.svg";
import FullStart from "../../img/FullStart.svg";
import HalfStar from "../../img/HalfStar.svg";
import support1 from "../../img/Support1.svg";
import support2 from "../../img/Support2.svg";

const Home = () => {
  return (
    <div className="pt-[3.5vh] flex items-center flex-col h-max min-h-[95vh] pb-[50px]">
      <h1 className="text-4xl ">Dashboard</h1>
      {/* Stats */}
      <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[1300px]:grid-cols-3 gap-[1.5vw] pl-[1.389vw] pr-[3.472vw] mt-[5.143vh] w-full max-[550px]:grid-cols-1 max-[550px]:gap-[10px] ">
        <StatististicsCard title={"total tickets"} val={12} color={"#2F82FF"} />
        <StatististicsCard title={"total solved"} val={8} color={"#0BFF68"} />
        <StatististicsCard
          title={"Total Awaiting Approval"}
          val={2}
          color={"#FE594E"}
        />
        <StatististicsCard
          title={"Total in Progress"}
          val={2}
          color={"#FCFF6C"}
        />
      </div>
      {/* Not for users */}
      <div
        className="flex max-[900px]:flex-col w-full items-center justify-between pl-[1.389vw] pr-[3.472vw] gap-[2.917vw] mt-[5vh] "
        style={{
          fontFamily: "Sanchez",
        }}>
        <div className="w-full h-[420px] bg-turquoise flex items-center justify-center">
          <img src={graph} alt="" />
        </div>
        <div className="w-full h-[420px]  flex flex-col gap-[1.5vw]">
          <div className="bg-turquoise h-2/3 w-full flex gap-[40px] items-center justify-center">
            <div className="flex flex-col items-center w-[180px]">
              <img src={support1} alt="" className="w-[100px] h-[130px]" />
              <h1 className="text-4xl">3</h1>
              <span className="text-2xl text-center w-full">
                Technical Supports
              </span>
            </div>
            <div className="flex flex-col items-center w-[180px]">
              <img src={support2} alt="" className="w-[100px] h-[130px]" />
              <h1 className="text-4xl">4</h1>
              <span className="text-2xl text-center w-full">
                Operation Team
              </span>
            </div>
          </div>
          {/* Feedback */}
          <div className="bg-turquoise h-1/3 w-full rounded-[20px] flex flex-col items-center justify-center ">
            <h1 className="text-3xl mb-1">Customer Feedback</h1>
            <span className="flex gap-[6px]">
              <img src={FullStart} alt="" />
              <img src={FullStart} alt="" />
              <img src={FullStart} alt="" />
              <img src={FullStart} alt="" />
              <img src={HalfStar} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
