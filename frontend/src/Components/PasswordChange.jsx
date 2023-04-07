import React, { useState } from "react";
import UpdatePasswordModal from "./UpdatePasswordModal";


function PasswordChange() {
    const [modal,setModal] = useState(false);
  return (
    <div className="px-[40px] py-[20px] ">
      <div className="border-b-[1.5px] border-gray-400 flex flex-col gap-[20px] pb-[30px]">
        <div className="text-[20px] font-bold flex justify-between">
          <p>PASSWORD & SECURITY</p>
          <button onClick={()=>{setModal(true)}} className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md">
            Edit
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-medium">Password</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <input
                type="password"
                className="outline-none w-[100%] px-[5px]"
                value={"abcd"}
              />
            </div>
          </div>
        </div>
      </div>
      {modal && (
          <div className="fixed top-0 left-0 w-[100%] h-[100%]  z-50 bg-[#535151a2] flex justify-center item">
            <UpdatePasswordModal   setModal={setModal} />
          </div>
        )}
    </div>
  );
}

export default PasswordChange;
