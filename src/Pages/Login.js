import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Features/UserSlice";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isShowindCredentials, setCredentials] = useState(true);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      alert("Please fill all the details!");
    } else {
      // alert("Please fill all the details!");
      dispatch(loginUser({ name: name, password: password }));
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
      {/* popup */}
      {isShowindCredentials && (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div
            className="w-full h-full bg-[#0000004f] z-40"
            onClick={() => setCredentials(false)}></div>
          <div className="w-[500px] h-[300px] bg-ghostWhite z-50 flex flex-col px-5 py-2 absolute sanchez ">
            <h1 className="w-full text-center text-xl  font-semibold">
              Login Dummy Credentials
            </h1>
            <div className="w-5/6 m-auto grid grid-cols-2 h-5/6 justify-between text-xl">
              <span className="font-medium">ID</span>

              <span className="font-medium">Password</span>
              <span>admin</span>
              <span>ANY..</span>
              <span>support</span>
              <span>ANY..</span>
              <span>operator</span>
              <span>ANY..</span>
              <span>user</span>
              <span>ANY..</span>
              <button
                className="col-span-2 rounded-lg bg-corn font-bold"
                onClick={() => setCredentials(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <form
        className="w-[70vw] h-[90vh] bg-[#EFEDED80] flex flex-col items-center pt-[11.5vh] gap-[8.5vh]"
        onSubmit={handleSubmit}>
        <h1 className="text-5xl font-bold">Helpdesk System</h1>

        <input
          type="text"
          className="py-[1.85vh] pl-[1.667vw] w-[41.5vw] text-3xl border-[1px] border-black"
          name=""
          id=""
          placeholder="Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="py-[1.85vh] pl-[1.667vw] w-[41.5vw] text-3xl border-[1px] border-black"
          name=""
          id=""
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          type="submit"
          className="h-[6.9vh] w-[22.29vw] bg-[#03CC17] text-white text-3xl rounded-lg">
          Sign In
        </button>
        <div className="flex w-[60%] items-center justify-between">
          <Link
            to={"/forgoten-password"}
            className="text-xl  cursor-pointer text-[#EA0000]">
            Forgot password
          </Link>
          <Link to={"/sign-up"} className="text-3xl cursor-pointer  ">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
