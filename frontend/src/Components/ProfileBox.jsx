import React from "react";
const userImage = require("../Images/avatar.jpg");

function ProfileBox() {
  return (
    <div className="w-[100%] flex justify-center md:justify-between items-center p-[10px] px-[40px]  border-b-[2px] border-gray-300">
      <div className="flex justify-center items-center gap-[20px]">
        <div className="image ">
          <img src={userImage} className="w-[70px] h-[70px] rounded-[50%] border-[1px]" alt="" />
        </div>
        <div className="flex flex-col">
            <h2 className="text-[24px] font-medium">Hello,</h2>
            <h3 className="text-[18px] font-bold">Target target</h3>
            <p>ttarget65@gmail.com</p>
        </div>
      </div>
      <div className="hidden md:block">
        10 followers
      </div>
    </div>
  );
}

export default ProfileBox;
