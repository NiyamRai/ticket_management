import React from "react";

const ViewTicket = ({ handleViwing }) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-[#00000070]  flex items-center justify-center z-50 sanchez">
      <div className="h-[570px] w-[750px] bg-white pt-[48px] px-[46px] pb-[22px] ">
        <h1 className="text-3xl text-center">Ticket Details</h1>
        <div className="mt-[22px] w-full text-2xl ">
          Ticket No: 1234 Date: <br />
          Name: <br />
          Dept: <br />
          <br />
          Title: <br />
          Description: <br />
          Category: <br />
          Type: <br />
          Priority: <br />
          Status: <br />
          Attachment:
        </div>
        <button
          onClick={handleViwing}
          className="mt-[10px] px-[60px] py-[10px] text-3xl bg-[#43D752] rounded-[10px] m-auto block">
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewTicket;
