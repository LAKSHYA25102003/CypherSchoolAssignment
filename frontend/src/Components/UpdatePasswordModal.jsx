import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditIcon from "@mui/icons-material/Edit";

function UpdatePasswordModal({ setModal }) {
  return (
    <div className="w-[100%] h-[100%]">
      <div className="flex  justify-center items-center h-[100%] w-[100%] md:w-[60%] mx-auto ">
        <form className="gap-[20px] flex flex-col p-[20px] bg-white rounded-[10px] w-[80%] drop-shadow-lg border-[1px] border-gray-400 z-[100]">
          <div className="flex text-center justify-between text-[22px] font-bold">
            <span>Update Password</span>
            <span
              className="cursor-pointer"
              onClick={() => {
                setModal(false);
              }}
            >
              <CloseOutlinedIcon />
            </span>
          </div>
          <div className="flex gap-1">
            <div className="w-[100%] flex flex-col gap-[5px]">
              <div className="flex flex-col gap-1 ">
                <p className="text-[18px] font-medium">Name</p>
                <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
                  <input
                    type="text"
                    className="outline-none w-[100%] px-[5px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="text-[18px] font-medium">Current Password</p>
                <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
                  <input
                    type="password"
                    className="outline-none w-[100%] px-[5px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="text-[18px] font-medium">New Password</p>
                <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
                  <input
                    type="password"
                    className="outline-none w-[100%] px-[5px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="text-[18px] font-medium">Confirm Password</p>
                <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
                  <input
                    type="text"
                    className="outline-none w-[100%] px-[5px]"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePasswordModal;
