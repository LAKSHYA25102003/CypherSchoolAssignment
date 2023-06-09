import React, { useState } from "react";
import CompLogo from "../../Images/CompLogo.png";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DropDownOptions from "./DropDownOptions";
import HomeContent from "../Home/HomeContent";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import showToast from "../../Utils/showToast";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Redux/user/userAction";
import { LinearProgress } from "@mui/material";

const NavBar = () => {
  // Link
  const { loader } = useSelector((store) => {
    return store.loader;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isdrop, setdrop] = useState(false);

  const setDrop = (e) => {
    setdrop(!isdrop);
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
    showToast({
      msg: "Successfully logout",
      type: "success",
    });
    dispatch(updateUser());
  };

  return (
    <>
      <div className="sticky top-0 flex flex-col  bg-white ">
        <div className="flex justify-between items-center  shadow-md  w-[100%] py-[15px]">
          <div className="flex  items-center ml-4 md:ml-20">
            <div>
              <img
                src={CompLogo}
                className="h-[35px] w-[35px] rounded-[50%] "
                alt=""
              />
            </div>
            <div className="hidden md:block ml-2 text-xl font-sans font-semibold">
              CipherSchools
            </div>
          </div>
          <div className="flex justify-center items-center md:w-[60%]">
            <div className="block ml-10 md:ml-40  text-lg font-medium">
              <div
                className="itemname cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </div>
            </div>
            <div className="block ml-4 md:ml-20 text-lg font-medium">
              <div
                className="itemname cursor-pointer"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Profile
              </div>
            </div>
            {localStorage.getItem("token") === null ? (
              <Link to="/login">
                <div className="block ml-4 md:ml-20 pr-[10px]  text-lg font-medium">
                  <div className="itemname">Login</div>
                </div>
              </Link>
            ) : (
              <div className="block ml-4 md:ml-20 pr-[10px]  text-lg font-medium">
                <div className="itemname cursor-pointer" onClick={logout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
        <div>{loader && <LinearProgress color="primary" />}</div>
      </div>
    </>
  );
};

export default NavBar;
