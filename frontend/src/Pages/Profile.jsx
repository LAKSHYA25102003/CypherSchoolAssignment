import React from "react";
import NavBar from "../Components/BasicLayouts/NavBar";
import SideBar from "../Components/BasicLayouts/SideBar";
import ProfileBox from "../Components/ProfileBox";
import UserAboutme from "../Components/UserAboutme";
import OnTheWeb from "../Components/OnTheWeb";
import ProfessionalInformation from "../Components/ProfessionalInformation";
import PasswordChange from "../Components/PasswordChange";
import Map from "../Components/Map";
import Interest from "../Components/Interest";

function Profile() {
  return (
    <div>
      <div className="flex  w-[100%] flex-col ">
        <NavBar />
        <div className="flex w-[100%] fixed top-[67px]">
          <div className="hidden md:block">
            <SideBar />
          </div>
          <div className="w-[100%] left-[62px] right-0 bg-[#edf2fa]">
            <ProfileBox />
            <div className="main-container w-[100%] h-[30%] md:h-[40%] overflow-y-auto pb-[20px]">
                <div className="about-me">
                    <UserAboutme/>
                </div>
                <div className="map">
                    <Map/>
                </div>
                <div className="on-the-web">
                    <OnTheWeb/>
                </div>
                <div className="on-the-web">
                    <ProfessionalInformation/>
                </div>
                <div className="password">
                    <PasswordChange/>
                </div>
                <div className="Interest">
                    <Interest/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;