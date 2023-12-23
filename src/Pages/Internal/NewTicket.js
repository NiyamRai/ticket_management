import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const NewTicket = () => {
  return (
    <form className="flex flex-col items-center pt-[3.5vw] px-2 sanchez  ">
      <h1 className=" text-4xl ">Create New Ticket</h1>
      <div className="mt-[5vw] w-[68.333vw] ">
        <div className="w-full flex gap-[5.694vw]">
          <div className="w-1/2 flex flex-col gap-[2.857vh]">
            <div className="flex justify-between items-center">
              <label htmlFor="" className="text-2xl">
                Ticket No:
              </label>
              <input
                type="text"
                className="w-[20.833vw]  bg-[#C4C4C4A1] h-[6.429vh] rounded-[10px] px-4"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="" className="text-2xl">
                Name:
              </label>
              <input
                type="text"
                className="w-[20.833vw]  bg-[#C4C4C4A1] h-[6.429vh] rounded-[10px] px-4"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-[2.857vh]">
            <div className="flex justify-between items-center">
              <label htmlFor="" className="text-2xl">
                Date:
              </label>
              <input
                type="text"
                className="w-[20.833vw]  bg-[#C4C4C4A1] h-[6.429vh] rounded-[10px] px-4"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="" className="text-2xl">
                Department:
              </label>
              <input
                type="text"
                className="w-[20.833vw]  bg-[#C4C4C4A1] h-[6.429vh] rounded-[10px] px-4"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-[2vh] mt-[2vh]">
          <label htmlFor="" className="text-2xl">
            Subject:
          </label>
          <input
            type="text"
            className="w-[100%]  bg-[#C4C4C4A1] h-[6.429vh] rounded-[10px] px-4"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          />
        </div>

        <div className="mt-[3.429vh] w-full h-full grid grid-cols-2 items-center gap-[1.736vw]">
          <div className="w-full">
            <div className="flex flex-col w-full gap-[2vh] mt-[2vh]">
              <label htmlFor="" className="text-2xl">
                Catagory:
              </label>
              <input
                type="text"
                className="w-[100%]  bg-[#C4C4C4A1] h-[6.429vh] rounded-[10px] px-4"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              />
            </div>

            <div className="flex flex-col w-full gap-[2vh] mt-[2vh]">
              <label htmlFor="" className="text-2xl">
                Type:
              </label>
              <input
                type="text"
                className="w-[100%]  bg-[#C4C4C4A1] h-[6.429vh] rounded-[10px] px-4"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              />
            </div>
            <div className="flex flex-col w-full gap-[2vh] mt-[2vh]">
              <label htmlFor="" className="text-2xl">
                Priority:
              </label>
              <input
                type="text"
                className="w-[100%]  bg-[#C4C4C4A1] h-[6.429vh] rounded-[10px] px-4"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-[2vh] mt-[2vh] h-full ">
            <label htmlFor="" className="text-2xl">
              Description:
            </label>
            <textarea
              type=""
              className="w-[100%]  bg-[#C4C4C4A1] h-full rounded-[10px] p-2"
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            />
          </div>
        </div>
      </div>

      {/* not a robot and submit  */}
      <div className="mt-[3.571vw] w-[68.333vw] mb-[10.286vh] relative">
        <ReCAPTCHA
          sitekey="6Lf5WDopAAAAANpzsCCYWr-4tdkkuhlKAamy8VXU"
          size="normal"
        />
        <button
          className="capitalize text-2xl bg-turquoise absolute bottom-0 right-0 w-[20.833vw] rounded-lg h-[7.857vh]"
          type="submit">
          submit
        </button>
      </div>
    </form>
  );
};

export default NewTicket;
