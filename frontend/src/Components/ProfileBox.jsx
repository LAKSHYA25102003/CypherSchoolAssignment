import React from "react";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ProfileEditModal from "./ProfileEditModal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFollowers } from "../Redux/user/userAction";

function ProfileBox() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [modal, setModal] = useState(false);
  const { user,followers,page } = useSelector((store) => {
    return store.user;
  });
  const handleClick=()=>{
    navigate("/followers");
    dispatch(fetchFollowers(page,followers));
  }
  if (user)
    return (
      <>
        <div className="w-[100%] flex justify-between items-center p-[10px] px-[15px]  md:px-[40px]  border-b-[2px] border-gray-300">
          <div className="flex justify-center items-center gap-[20px]">
            <div className="image relative ">
              <img
                src={`https://backendcipher.onrender.com/${user.profileImageUrl}`}
                className="w-[70px] h-[70px] rounded-[50%] border-[1px]"
                alt={user.name}
              />
              <div className="absolute bottom-[-10px] w-[100%]  flex justify-center items-center z-0">
                <div className=" w-[25px] h-[25px] cursor-pointer  rounded-[50%] flex justify-center items-center bg-gray-700 text-white" onClick={()=>{setModal(true)}}>
                  <EditIcon fontSize="small" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[24px] font-medium">Hello,</h2>
              <h3 className="text-[18px] font-bold">{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>
          <div className=" text-[20px] font-medium cursor-pointer" onClick={handleClick}>
            {user.followers.length} followers
          </div>
        </div>

        {modal && (
          <div className="fixed top-0 left-0 w-[100%] h-[100%]  z-49 bg-[#535151a2] flex justify-center item">
            <ProfileEditModal user={user}  setModal={setModal} />
          </div>
        )}
      </>
    );
}

export default ProfileBox;
