import React from "react";
import search from "../../img/Search.svg";
import dropbox from "../../img/DropBox.svg";
import tick from "../../img/Tick.svg";
import cross from "../../img/Cross.svg";

const TicketApproval = () => {
  return (
    <div className="flex flex-col items-center pt-[3.5vw] px-2 sanchez  bg-white pb-20">
      <h1 className=" text-4xl w-[68.333vw]">Ticket Approval</h1>
      <div className="mt-[2.571vh] w-[68.333vw]  flex flex-col">
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
            <span className="w-[120px] text-2xl text-center">Catagory</span>
            <span className="w-[120px] text-2xl text-center">Priority</span>
            <span className="w-[120px] text-2xl text-center">Date</span>
            <span className="w-[70px] text-2xl text-center">Action</span>
            <span className="w-[125px] text-2xl text-center">Assign to</span>
          </div>

          <div className="items-center flex  w-full justify-between px-2 py-[8px] bg-[#C4C4C45E]">
            <span className="w-[120px] text-2xl text-center text-trueBlue underline">
              1234
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Login issue
            </span>

            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Access issue
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              High
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              13/08/21
            </span>
            <span className="w-[70px] flex items-center justify-between">
              <img src={tick} alt="" />
              <img src={cross} alt="" />
            </span>
            <span className="w-[125px] flex gap-[4.5px] px-[2px] py-2">
              <span className="h-[46px] w-full bg-[#C4C4C4] flex items-center justify-end px-1">
                <img src={dropbox} alt="" />
              </span>
            </span>
          </div>

          <div className="items-center flex  w-full justify-between px-2 py-[8px] bg-[#0000002e]">
            <span className="w-[120px] text-2xl text-center text-trueBlue underline">
              1234
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Login issue
            </span>

            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Access issue
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Medium
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              13/08/21
            </span>
            <span className="w-[70px] flex items-center justify-between">
              <img src={tick} alt="" />
              <img src={cross} alt="" />
            </span>
            <span className="w-[125px] flex gap-[4.5px] px-[2px] py-2">
              <span className="h-[46px] w-full bg-[#C4C4C4] flex items-center justify-end px-1">
                <img src={dropbox} alt="" />
              </span>
            </span>
          </div>

          <div className="items-center flex  w-full justify-between px-2 py-[8px] bg-[#C4C4C45E]">
            <span className="w-[120px] text-2xl text-center text-trueBlue underline">
              1234
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Login issue
            </span>

            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Access issue
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Low
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              13/08/21
            </span>
            <span className="w-[70px] flex items-center justify-between">
              <img src={tick} alt="" />
              <img src={cross} alt="" />
            </span>
            <span className="w-[125px] flex gap-[4.5px] px-[2px] py-2">
              <span className="h-[46px] w-full bg-[#C4C4C4] flex items-center justify-end px-1">
                <img src={dropbox} alt="" />
              </span>
            </span>
          </div>

          <div className="items-center flex  w-full justify-between px-2 py-[8px] bg-[#0000002e]">
            <span className="w-[120px] text-2xl text-center text-trueBlue underline">
              1234
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Login issue
            </span>

            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Access issue
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Medium
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              13/08/21
            </span>
            <span className="w-[70px] flex items-center justify-between">
              <img src={tick} alt="" />
              <img src={cross} alt="" />
            </span>
            <span className="w-[125px] flex gap-[4.5px] px-[2px] py-2">
              <span className="h-[46px] w-full bg-[#C4C4C4] flex items-center justify-end px-1">
                <img src={dropbox} alt="" />
              </span>
            </span>
          </div>
          <div className="items-center flex  w-full justify-between px-2 py-[8px] bg-[#C4C4C45E]">
            <span className="w-[120px] text-2xl text-center text-trueBlue underline">
              1234
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Login issue
            </span>

            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Access issue
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              Low
            </span>
            <span
              className="w-[120px] text-2xl text-center"
              style={{ lineHeight: "18px" }}>
              13/08/21
            </span>
            <span className="w-[70px] flex items-center justify-between">
              <img src={tick} alt="" />
              <img src={cross} alt="" />
            </span>
            <span className="w-[125px] flex gap-[4.5px] px-[2px] py-2">
              <span className="h-[46px] w-full bg-[#C4C4C4] flex items-center justify-end px-1">
                <img src={dropbox} alt="" />
              </span>
            </span>
          </div>

          {/* Pagination */}
          <div className="text-2xl flex items-center justify-between">
            <span>Showing 1 to 5 of 5 entries</span>
            <span>{"<< 1 >>"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketApproval;
