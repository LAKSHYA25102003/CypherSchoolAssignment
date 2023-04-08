import React from "react";
import { useDispatch } from "react-redux";
import { followUnfollow } from "../Redux/user/userAction";
import { useSelector } from "react-redux";
const avatar = require("../Images/avatar.jpg");


function FollowerCard({ follower }) {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => {
    return store.user;
  });

  return (
    <div className="flex flex-col justify-between p-[10px] max-h-[300px]  border-[2px] rounded-[15px] border-gray-400 drop-shadow-md bg-white">
      <div className="w-[100%] flex justify-center items-center">
        <img
          src={avatar}
          className="w-[100px] h-[100px] rounded-[50%] border-[1px] border-gray-400"
          alt=""
        />
      </div>
      <div className="flex flex-col text-[18px] font-medium py-[5px]">
        <div>{follower.name}</div>
        {follower.proffInfo.highestEdu !== "None" && (
          <div>{follower.proffInfo.highestEdu}</div>
        )}
        <div>{follower.followers.length} follwers</div>
      </div>
      <div className="w-[100%]">
        {user.followings.includes(follower._id) ? (
          <button onClick={()=>{dispatch(followUnfollow({friendId:follower._id}))}} className="text-center w-[100%] text-[15px] font-medium text-black border-[2px] border-gray-400 bg-white px-[10px] py-[5px] rounded-[13px]">
            Unfollow
          </button>
        ) : (
          <button onClick={()=>{dispatch(followUnfollow({friendId:follower._id}))}} className="text-center w-[100%] text-[15px] font-medium text-white bg-[#f3912e] px-[10px] py-[5px] rounded-[13px]">
            Follow
          </button>
        )}
      </div>
    </div>
  );
}

export default FollowerCard;
