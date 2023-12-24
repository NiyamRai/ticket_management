import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "../Features/UserSlice";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isLoading } = useSelector((store) => store.user);
  console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      alert("Please fill all the details!");
    } else {
      // alert("Please fill all the details!");
      dispatch(postUser({ email: name, password: password }));
    }
  };
  const { role } = useSelector((store) => store.user);
  useEffect(() => {
    if (role !== "") {
      navigate("/");
    }
  }, [role]);

  return (
    <div className="w-full  bg-turquoise h-[99.99vh] flex items-center justify-center">
      <div className="w-[70vw] h-[90vh] bg-[#EFEDED80] flex flex-col items-center py-[2.4vh] gap-[3vh]">
        <h1 className="text-5xl font-bold">Helpdesk System</h1>
        <span className="text-3xl ">Sign up here</span>
        <input
          type="text"
          className="py-[1.85vh] pl-[1.667vw] w-[41.5vw] text-3xl border-[1px] border-black"
          name=""
          id=""
          placeholder="Username"
        />
        <input
          type="password"
          className="py-[1.85vh] pl-[1.667vw] w-[41.5vw] text-3xl border-[1px] border-black"
          name=""
          id=""
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          className="py-[1.85vh] pl-[1.667vw] w-[41.5vw] text-3xl border-[1px] border-black"
          name=""
          id=""
          placeholder="Email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="h-[6.9vh] w-[22.29vw] bg-[#296EF2] text-white text-3xl rounded-lg"
          onClick={handleSubmit}>
          Sign Up
        </button>
        <div className="flex w-[60%] items-center justify-between">
          <Link to={"/forgoten-password"} className="text-xl  text-[#EA0000]">
            Forgot password
          </Link>
          <Link to={"/login"} className="text-3xl  ">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
