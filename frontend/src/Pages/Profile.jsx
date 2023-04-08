import React, { useEffect } from "react";
import NavBar from "../Components/BasicLayouts/NavBar";
import SideBar from "../Components/BasicLayouts/SideBar";
import ProfileBox from "../Components/ProfileBox";
import UserAboutme from "../Components/UserAboutme";
import OnTheWeb from "../Components/OnTheWeb";
import ProfessionalInformation from "../Components/ProfessionalInformation";
import PasswordChange from "../Components/PasswordChange";
import Map from "../Components/Map";
import Interest from "../Components/Interest";
import { useNavigate } from "react-router-dom";
import showToast from "../Utils/showToast";
import { useSelector } from "react-redux";

function Profile() {
  const navigate = useNavigate();
  const {user} = useSelector(store=>{return store.user})
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      showToast({
        msg: "Please login first.",
        type: "error",
      });
      navigate("/login");
    }
  }, []);
  if (localStorage.getItem("token") !== null&&user!==null) {
    return (
      <div>
        <div className="flex  w-[100%] flex-col ">
          <NavBar />
          <div className="flex w-[100%] fixed top-[67px]">
            <div className="hidden md:block">
              <SideBar />
            </div>
            <div  className="w-[100%] left-[62px] right-0 bg-[#edf2fa]">
              <ProfileBox />
              <div style={{height:"calc(100vh - 167px)"}} className="main-container w-[100%] h-[100%] overflow-y-auto pb-[20px]">
                <div className="about-me">
                  <UserAboutme />
                </div>
                <div className="map">
                  <Map />
                </div>
                <div className="on-the-web">
                  <OnTheWeb />
                </div>
                <div className="on-the-web">
                  <ProfessionalInformation />
                </div>
                <div className="password">
                  <PasswordChange />
                </div>
                <div className="Interest">
                  <Interest />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else
  {
    return <div className="text-center text-[30px] font-medium p-[30px]">Loading...</div>
  }
}

export default Profile;
