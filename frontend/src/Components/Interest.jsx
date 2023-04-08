import React, { useState } from "react";
import InterestModal from "./InterestModal";
import { useSelector } from "react-redux";

function Interest() {
  const { user } = useSelector((store) => {
    return store.user;
  });
  const [modal, setModal] = useState(false);
  return (
    <div className="px-[40px] py-[20px] ">
      <div className="border-b-[1.5px] border-gray-400 flex flex-col gap-[20px] pb-[30px]">
        <div className="text-[20px] font-bold flex justify-between items-center">
          <p>INTERESTS</p>
          <button
            onClick={() => {
              setModal(true);
            }}
            className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md"
          >
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {user.interest.map((i) => {
            return <div
              className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-[#f3912e] text-white cursor-pointer   border-none"
            >
              <div className="outline-none w-[100%] px-[5px] font-medium">{i}</div>
            </div>;
          })}
        </div>
      </div>
      {modal && (
        <div className="fixed top-0 left-0 w-[100%] h-[100%]  z-50 bg-[#535151a2] flex justify-center item">
          <InterestModal setModal={setModal} />
        </div>
      )}
    </div>
  );
}

export default Interest;
