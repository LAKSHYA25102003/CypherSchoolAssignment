import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditIcon from "@mui/icons-material/Edit";
import showToast from "../Utils/showToast";
import { updateDetails, updateProfilePic } from "../Redux/user/userAction";
import { useDispatch } from "react-redux";

const MAX_COUNT = 1;

function ProfileEditModal({ setModal, user }) {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [data,setData] = useState({name:user.name,mobile:user.mobile});
  const detectChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const save =  (e) => {
    e.preventDefault();
    dispatch(updateProfilePic(file,data,setModal));
  };
  return (
    <div className="w-[100%] h-[100%]">
      <div className="flex  justify-center items-center h-[100%] w-[100%] md:w-[60%] mx-auto ">
        <form onSubmit={save} className="gap-[20px] flex flex-col p-[20px] bg-white rounded-[10px] w-[80%] drop-shadow-lg border-[1px] border-gray-400 z-[100]">
          <div className="flex text-center justify-between text-[22px] font-bold">
            <span>Update Profile</span>
            <span
              className="cursor-pointer"
              onClick={() => {
                setModal(false);
              }}
            >
              <CloseOutlinedIcon />
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-1 justify-center items-center">
            <div className="w-[30%] flex justify-center items-center">
              <div className="image relative flex justify-center items-center">
                {file ? (
                  <img
                    src={URL.createObjectURL(file)}
                    className="w-[120px] h-[120px] rounded-[50%] border-[1px]"
                    alt=""
                  />
                ) : (
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/${user.profileImageUrl}`}
                    className="w-[120px] h-[120px] rounded-[50%] border-[1px]"
                    alt=""
                  />
                )}
                <div className="absolute bottom-[-10px] w-[100%]  flex justify-center items-center z-0">
                  <label
                    htmlFor="files"
                    className="w-[25px] h-[25px] cursor-pointer rounded-[50%] flex  justify-center items-center bg-gray-700 text-white"
                  >
                    <div className="">
                      <EditIcon fontSize="small" />
                    </div>
                  </label>
                  <input
                    id="files"
                    type="file"
                    className="hidden w-[25px] h-[25px] cursor-pointer  rounded-[50%]  justify-center items-center bg-gray-700 text-white"
                    accept="image/png,image/jpg,image/jpeg"
                    multiple
                    onChange={(e)=>{setFile(e.target.files[0])}}
                  ></input>
                </div>
              </div>
            </div>
            <div className="w-[70%] flex flex-col gap-[5px]">
              <div className="flex flex-col gap-1 ">
                <p className="text-[18px] font-medium">Name</p>
                <div onChange={detectChange} className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
                  <input
                    name="name"
                    value={data.name}
                    type="text"
                    className="outline-none w-[100%] px-[5px]"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="text-[18px] font-medium">Email</p>
                <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="outline-none w-[100%] px-[5px]"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="text-[18px] font-medium">Mobile number</p>
                <div onChange={detectChange}  className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
                  <input
                    type="number"
                    name="mobile"
                    value={data.mobile}
                    className="outline-none w-[100%] px-[5px]"
                    placeholder="Mobile number"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => {
                    setModal(false);
                    setFile(null);
                  }}
                  className="bg-black text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md">
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

export default ProfileEditModal;
