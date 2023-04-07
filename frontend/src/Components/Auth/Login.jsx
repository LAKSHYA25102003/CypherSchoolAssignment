import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Redux/user/userAction";
import SideBar from "../BasicLayouts/SideBar";
import { useDispatch } from "react-redux";
import showToast from "../../Utils/showToast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const detectChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const clearUser = () => {
    setUser({ email: "", password: "" });
    navigate("/profile");
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user, clearUser));
  };
  useEffect(() => {
    if(localStorage.getItem("token") !== null) {
        showToast({
            msg: "Already logged in.",
            type: "error",
          });
      navigate("/profile");
    }
  }, []);
  if (localStorage.getItem("token") === null) {
    return (
      <>
        <div className="flex bg-white">
          <SideBar />

          <section className="w-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
              <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 border-2 shadow-lg border-cyan-300">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6 " onSubmit={submit}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-black "
                      >
                        Your email
                      </label>
                      <input
                        value={user.email}
                        onChange={detectChange}
                        type="email"
                        name="email"
                        id="email"
                        className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Password
                      </label>
                      <input
                        value={user.password}
                        onChange={detectChange}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-black bg-primary-600 bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center "
                    >
                      Sign In
                    </button>
                    <p className="text-sm font-normal text-black ">
                      Don’t have an account yet?{" "}
                      <Link
                        to="/signup"
                        className="font-medium text-black hover:underline dark"
                      >
                        Sign up
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  } 
};

export default Login;
