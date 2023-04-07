import React, { useEffect } from "react";
import SideBar from "./BasicLayouts/SideBar";
import NavBar from "./BasicLayouts/NavBar";
import HomeContent from "./Home/HomeContent";

const Home = () => {
  return (
    <div>
      <div className="flex bg-white w-[100%] flex-col">
        <NavBar />
        <div className="flex top-[67px] fixed  w-[100%]">
          <SideBar />
          <HomeContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
