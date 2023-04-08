import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateDetails } from "../Redux/user/userAction";


const UserAboutme=()=> {
  const dispatch= useDispatch();
  const {user} = useSelector(store=>{return store.user});
  const [aboutMe,setaboutMe] = useState(user.aboutMe);
  const [edit,setEdit] = useState(false)
  const save=()=>{
    const data={
      aboutMe:aboutMe
    }
    if(edit)
    {
      setEdit(false);
      dispatch(updateDetails(data));
    }
    else
    {
      setEdit(true);
    }
  }
  return (
    <div className="px-[40px] py-[20px] ">
      <div className="border-b-[1.5px] border-gray-400 flex flex-col gap-[20px] pb-[30px]">
        <div className="text-[20px] font-bold flex justify-between items-center">
          <p>ABOUT ME</p>
          <button onClick={save} className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md">
            {edit?"Save":"Edit"}
          </button>
        </div>
        <div>
          <textarea
            disabled={edit?false:true}
            value={aboutMe}
            onChange={(e)=>{setaboutMe(e.target.value)}}
            placeholder="Add something about you."
            name="aboutme"
            className=" bg-white w-[100%] h-[140px] rounded-md p-[10px] outline-none border-[1px] border-gray-400"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default UserAboutme;
