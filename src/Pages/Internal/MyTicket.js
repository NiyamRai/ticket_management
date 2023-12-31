import React, { useState } from "react";
import search from "../../img/Search.svg";
import starGray from "../../img/StarDark.svg";
import starGolden from "../../img/StarGolden.svg";
import ViewTicket from "../../Components/ViewTicket";

const MyTicket = () => {
  const [isViwing, setViwing] = useState(false);
  const handleViwing = () => {
    setViwing((state) => !state);
  };

  return (
    <div className="flex flex-col items-center pt-[3.5vw] px-2 sanchez  bg-white pb-20">
      {/* popups */}
      {isViwing && <ViewTicket handleViwing={handleViwing} />}
      <h1 className=" text-4xl ">List Of Ticket</h1>
      <div className="mt-[7.571vh] w-[68.333vw]  flex flex-col">
        {/* Sarch bar */}
        <div
          className="w-[21.389vw] bg-[#C4C4C4A1]  h-[53px] flex items-center pr-[12px] rounded-[10px] text-3xl"
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
          <input
            type="text"
            className="w-full h-full px-4 bg-transparent outline-none "
            placeholder="Find Ticket"
          />
          <img src={search} alt="" className="w-[33px] h-[40px] " />
        </div>

        <div className="text-2xl px-4 mt-[4.571vh]">
          Show:{" "}
          <input
            type="number"
            placeholder="10"
            className="w-[91px] bg-[#C4C4C4] px-2 h-12 "
            value={10}
          />{" "}
          Entities
        </div>

        <div className="mt-[2.571vh] w-full flex flex-col">
          <div className="items-center flex mb-[15px] w-full justify-between px-2">
            <span className="w-[120px] text-2xl text-center">Ticket No.</span>
            <span className="w-[120px] text-2xl text-center">Subject</span>
            <span className="w-[120px] text-2xl text-center">Status</span>
            <span className="w-[130px] text-2xl text-center">Support by</span>
            <span className="w-[120px] text-2xl text-center">Date</span>
            <span className="w-[135px] text-2xl text-center">Rate</span>
          </div>

          <div
            className="items-center flex  w-full justify-between px-2 py-[8px] bg-[#C4C4C45E] cursor-pointer"
            onClick={handleViwing}>
            <span className="w-[120px] text-2xl text-center text-trueBlue underline">
              1234
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Login issue
            </span>
            <span
              className="w-[120px] text-[24px] text-center bg-[#5CDB95] rounded-md flex items-center justify-center h-[42px] "
              style={{ lineHeight: "18px" }}>
              In Progress
            </span>
            <span
              className="w-[130px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Tech Support
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              13/08/21
            </span>
            <span className="w-[135px] flex gap-[4.5px]">
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
            </span>
          </div>

          <div
            className="items-center flex  w-full justify-between px-2 py-[8px] bg-[#0000002e] cursor-pointer"
            onClick={handleViwing}>
            <span className="w-[120px] text-2xl text-center text-trueBlue underline">
              1234
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Login issue
            </span>
            <span
              className="w-[120px] text-[24px] text-center bg-[#05386B] text-white rounded-md flex items-center justify-center h-[42px] "
              style={{ lineHeight: "18px" }}>
              On Hold
            </span>
            <span
              className="w-[130px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Tech Support
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              13/08/21
            </span>
            <span className="w-[135px] flex gap-[4.5px]">
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
            </span>
          </div>

          <div
            className="items-center flex  w-full justify-between px-2 py-[8px] bg-[#C4C4C45E] cursor-pointer"
            onClick={handleViwing}>
            <span className="w-[120px] text-2xl text-center text-trueBlue underline">
              1234
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Login issue
            </span>
            <span
              className="w-[120px] text-[24px] text-center bg-[#212025] rounded-md flex items-center justify-center h-[42px]  text-white"
              style={{ lineHeight: "18px" }}>
              Closed
            </span>
            <span
              className="w-[130px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Tech Support
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              13/08/21
            </span>
            <span className="w-[135px] flex gap-[4.5px]">
              <img src={starGolden} alt="" />
              <img src={starGolden} alt="" />
              <img src={starGolden} alt="" />
              <img src={starGolden} alt="" />
              <img src={starGolden} alt="" />
            </span>
          </div>

          <div
            className="items-center flex  w-full justify-between px-2 py-[8px] bg-[#0000002e] cursor-pointer"
            onClick={handleViwing}>
            <span className="w-[120px] text-2xl text-center text-trueBlue underline">
              1234
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Login issue
            </span>
            <span
              className="w-[120px] text-[24px] text-center bg-[#05386B] text-white rounded-md flex items-center justify-center h-[42px] "
              style={{ lineHeight: "18px" }}>
              On Hold
            </span>
            <span
              className="w-[130px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Tech Support
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              13/08/21
            </span>
            <span className="w-[135px] flex gap-[4.5px]">
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
              <img src={starGray} alt="" />
            </span>
          </div>

          <div
            className="items-center flex  w-full justify-between px-2 py-[8px] bg-[#C4C4C45E] cursor-pointer"
            onClick={handleViwing}>
            <span className="w-[120px] text-2xl text-center text-trueBlue underline">
              1234
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Login issue
            </span>
            <span
              className="w-[120px] text-[24px] text-center bg-[#212025] rounded-md flex items-center justify-center h-[42px]  text-white"
              style={{ lineHeight: "18px" }}>
              Closed
            </span>
            <span
              className="w-[130px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Tech Support
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              13/08/21
            </span>
            <span className="w-[135px] flex gap-[4.5px]">
              <img src={starGolden} alt="" />
              <img src={starGolden} alt="" />
              <img src={starGolden} alt="" />
              <img src={starGolden} alt="" />
              <img src={starGolden} alt="" />
            </span>
          </div>

          <div className="text-2xl flex items-center justify-between">
            <span>Showing 1 to 5 of 5 entries</span>
            <span>{"<< 1 >>"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTicket;
