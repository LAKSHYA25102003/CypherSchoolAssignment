import React, { useEffect } from "react";
import FollowerCard from "../Components/FollowerCard";
import NavBar from "../Components/BasicLayouts/NavBar";
import SideBar from "../Components/BasicLayouts/SideBar";
import { useNavigate } from "react-router-dom";
import showToast from "../Utils/showToast";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollowers } from "../Redux/user/userAction";

function Followers() {
  const dispatch = useDispatch();
  const { followers, page, user } = useSelector((store) => {
    return store.user;
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      showToast({
        msg: "Please login first.",
        type: "error",
      });
      navigate("/login");
    }
  }, []);
  if (user) {
    return (
      <div className="">
        <div className="flex w-[100%] flex-col ">
          <NavBar />
          <div className="flex w-[100%] fixed top-[67px]">
            <div>
              <SideBar />
            </div>
            <div
              style={{ height: "calc(100vh - 65px)" }}
              className="w-[100%]    bg-[#edf2fa] mb-[10px]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  h-[80%] min-[1024px]:h-[90%]  overflow-y-auto gap-[40px] p-[10px]">
                {followers.map((f) => {
                  return <FollowerCard key={f._id} follower={f} />;
                })}
                {user.followers.length>followers.length && (
                  <div className=" items-end flex justify-end">
                    <button
                      onClick={() => {
                        dispatch(fetchFollowers(page, followers));
                      }}
                      className="bg-[#f3912e] text-[18px] h-[30px] font-medium text-white p-[2px] px-[10px]  rounded-md"
                    >
                      Show More
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center text-[30px] font-medium p-[30px]">
        Loading...
      </div>
    );
  }
}

export default Followers;
