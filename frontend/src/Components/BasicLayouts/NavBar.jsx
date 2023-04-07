import React, { useState } from "react";
import CompLogo from "../../Images/CompLogo.png";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DropDownOptions from "./DropDownOptions";
import HomeContent from "../Home/HomeContent";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import showToast from "../../Utils/showToast";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Redux/user/userAction";


const NavBar = () => {
  // Link

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [isdrop, setdrop] = useState(true);

  const setDrop = (e) => {
    setdrop(!isdrop);
  };

  const logout=(e)=>{
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
    showToast({
      msg:"Successfully logout",
      type:"success"
    })
    dispatch(updateUser());
  }

  return (
    <>
      <div className="sticky top-0 flex   bg-white ">
        <div className="flex justify-between items-center  shadow-md  w-screen py-[15px]">
          <div className="flex  items-center ml-4 md:ml-20">
            <div>
              <img
                src={CompLogo}
                className="h-[35px] w-[35px] rounded-[50%] "
                alt=""
              />
            </div>
            <div className=" ml-2 text-xl font-sans font-semibold">
              CipherSchools
            </div>
          </div>
          <div className="flex justify-center items-center md:w-[60%]">
            <div className="hidden min-[800px]:block ml-10 md:ml-40  text-lg font-medium">
              <div className="itemname">Home</div>
            </div>
            <div className="hidden min-[800px]:block ml-4 md:ml-20 text-lg font-medium">
              <div className="itemname">Creative</div>
            </div>
            {localStorage.getItem("token") === null ? (
              <Link to="/login">
                <div className="hidden min-[800px]:block ml-4 md:ml-20  text-lg font-medium">
                  <div className="itemname">Login</div>
                </div>
              </Link>
            ) : (
              <div className="hidden min-[800px]:block ml-4 md:ml-20  text-lg font-medium">
                <div className="itemname cursor-pointer" onClick={logout} >Logout</div>
              </div>
            )}
            <div className="flex min-[800px]:hidden fixed right-4">
              <DropDownOptions setHidden={isdrop} />
              {isdrop ? (
                <ArrowDropDownCircleOutlinedIcon onClick={setDrop} />
              ) : (
                <CancelOutlinedIcon onClick={setDrop} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
