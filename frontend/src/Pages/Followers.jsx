import React, { useEffect } from "react";
import FollowerCard from "../Components/FollowerCard";
import NavBar from "../Components/BasicLayouts/NavBar";
import SideBar from "../Components/BasicLayouts/SideBar";
import { useNavigate } from "react-router-dom";
import showToast from "../Utils/showToast";

function Followers() {
    const navigate=useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      showToast({
        msg: "Please login first.",
        type: "error",
      });
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div className="flex  w-[100%] flex-col ">
        <NavBar />
        <div className="flex w-[100%] fixed top-[67px]">
          <div className="hidden md:block">
            <SideBar />
          </div>
          <div className="w-[100%] left-[62px] right-0 bg-[#edf2fa] pb-[10px]">
            <div style={{height:"calc(100vh - 67px)"}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   overflow-y-auto gap-[40px] p-[10px]">
              <FollowerCard />
              <FollowerCard />
              <FollowerCard />
              <FollowerCard />
              <FollowerCard />
              <FollowerCard />
              <FollowerCard />
              <FollowerCard />
              <FollowerCard />
              <FollowerCard />
              <FollowerCard />
              <FollowerCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Followers;
