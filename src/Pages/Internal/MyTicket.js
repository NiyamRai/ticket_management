import React from "react";
import search from "../../img/Search.svg";

const MyTicket = () => {
  return (
    <div className="flex flex-col items-center pt-[3.5vw] px-2 sanchez  ">
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
      </div>
    </div>
  );
};

export default MyTicket;
