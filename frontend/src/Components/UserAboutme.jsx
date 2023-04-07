import React from "react";

function UserAboutme() {
  return (
    <div className="px-[40px] py-[20px] ">
      <div className="border-b-[1.5px] border-gray-400 flex flex-col gap-[20px] pb-[30px]">
        <div className="text-[20px] font-bold flex justify-between">
          <p>ABOUT ME</p>
          <button className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md">
            Edit
          </button>
        </div>
        <div>
          <textarea
            placeholder="Add something about you."
            name="aboutme"
            className="w-[100%] h-[140px] rounded-md p-[10px] outline-none border-[1px] border-gray-400"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default UserAboutme;
