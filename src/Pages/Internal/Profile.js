import React from "react";
import user from "../../img/User.svg";
import darkStar from "../../img/StarDark.svg";

const Profile = () => {
  return (
    <div className="flex flex-col items-center pt-[3.5vw] px-2 sanchez  bg-white pb-20">
      <h1 className=" text-4xl w-[70.333vw]">User Profile</h1>
      <div className="mt-[2.571vh] w-[70.333vw] h-[700px]  flex justify-between px-[70px] min-w-max py-[44px] bg-turquoise">
        <div className="w-[470px] h-[425px] px-7 py-6 bg-white rounded-3xl">
          <div className="h-2/3 flex items-center justify-center">
            <div className="w-44 h-44 rounded-full bg-[#C4C4C4] flex items-center justify-center">
              <img src={user} alt="" className="w-24 h-24" />
            </div>
          </div>
          <div className="h-1/3 text-2xl">
            Username <br />
            Contact Number <br />
            Email <br />
            Department <br />
          </div>
        </div>
        <div className="w-[400px] h-[230px] bg-white rounded-3xl py-[24px] flex flex-col items-center justify-between">
          <h1 className="text-lg">Give Your Feedback</h1>
          <input
            type="text"
            name=""
            id=""
            className="h-12 w-72 bg-[#9C9C9C] px-2 text-black"
            placeholder="Write Review"
          />
          <div className="flex items-center justify-center w-full min-w-max">
            <img src={darkStar} alt="" />
            <img src={darkStar} alt="" />
            <img src={darkStar} alt="" />
            <img src={darkStar} alt="" />
            <img src={darkStar} alt="" />
          </div>
          <button className="w-[300px] text-2xl rounded-lg h-[57px] bg-turquoise">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
