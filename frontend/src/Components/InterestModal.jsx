import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setFieldInterest, updateDetails } from "../Redux/user/userAction";
import { useDispatch } from "react-redux";

function InterestModal({ setModal }) {
  let array = [
    "App Development",
    "Web Development",
    "Game Development",
    "Data Structures",
    "Programming",
    "Machine Learning",
    "Data Science",
    "Others",
  ];
  const dispatch = useDispatch();
  const { user } = useSelector((store) => {
    return store.user;
  });
  const save = (e) => {
    e.preventDefault();
    const data={
        interest:user.interest
    };
    dispatch(updateDetails(data,setModal))
  };
  return (
    <div className="w-[100%] h-[100%]">
      <div className="flex  justify-center items-center h-[100%] w-[100%] md:w-[60%] mx-auto ">
        <div className="gap-[20px] flex flex-col p-[20px] bg-white rounded-[10px] w-[80%] drop-shadow-lg border-[1px] border-gray-400 z-[100]">
          <div className="flex flex-col gap-1">
            <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-[8px] px-[10px] font-medium">
              {array.map((a) => {
                return (
                  <div className="flex flex-col gap-1  ">
                    {user.interest.includes(a) ? (
                      <div
                        onClick={() => {
                          dispatch(
                            setFieldInterest({
                              user,
                              field: a,
                              set: false,
                            })
                          );
                        }}
                        className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-[rgb(65,65,64)] text-white cursor-pointer   border-none"
                      >
                        <div className="outline-none w-[100%] px-[5px] ">
                          {a}
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          dispatch(
                            setFieldInterest({
                              user,
                              field: a,
                              set: true,
                            })
                          );
                        }}
                        className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white cursor-pointer hover:text-white hover:bg-[#f3912e] hover:border-none"
                      >
                        <div className="outline-none w-[100%] px-[5px] ">
                          {a}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end gap-2 pt-2 px-[10px]">
              <button
                onClick={() => {
                  setModal(false);
                }}
                className="bg-black text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={save}
                className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestModal;
