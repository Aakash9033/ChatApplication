import React, { useState } from "react";
import { Link } from "react-router-dom";
import Uselogin from "../../hooks/Uselogin";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = Uselogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500 pl-2">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className=" text-gray-300 text-base label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="text-gray-300 bg-gray-800 w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-gray-300 text-base label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="text-gray-300 bg-gray-800 w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className=" text-gray-300 text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Dont't"} have an account?
          </Link>
          <div>
            <button
              className="text-gray-300 bg-gray-800 hover:bg-gray-800 border-none btn btn-block btn-sm mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className=" loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
