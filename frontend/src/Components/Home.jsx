import React, { useEffect } from "react";
import SideBar from "./BasicLayouts/SideBar";
import NavBar from "./BasicLayouts/NavBar";
import HomeContent from "./Home/HomeContent";

const Home = () => {
  return (
    <div>
      <div className="flex bg-white w-[100%] flex-col">
        <NavBar />
        <div className="top-[67px] left-0 fixed">
          <SideBar />
        </div>
        <div className="w-[90%] mx-auto overflow-y-auto min-[1024px]:ml-[67px] flex justify-center items-center">
          <HomeContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
