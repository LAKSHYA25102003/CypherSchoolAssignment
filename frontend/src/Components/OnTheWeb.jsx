import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateDetails } from "../Redux/user/userAction";


function OnTheWeb() {
  const dispatch = useDispatch();
  const {user} = useSelector(store=>{return store.user})
  const [edit,setEdit] = useState(false);
  const [data,setData] = useState({linkedinid:user.onTheWeb.LinkedInId,githubid:user.onTheWeb.GithubId,facebookid:user.onTheWeb.FaceBookId,twitterid:user.onTheWeb.Twitter,instagramid:user.onTheWeb.Instagram,website:user.onTheWeb.Website})
  const detectChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const save=()=>{
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
        <div className="text-[20px] font-bold flex justify-between items-center ">
          <p>ON THE WEB</p>
          <button onClick={save} className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md">
          {edit?"Save":"Edit"}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">LinkedIn</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" alt="LinkedIn" />
              <input disabled={edit?false:true} onChange={detectChange}  type="url" name="linkedinid" value={data.linkedinid} className="outline-none w-[100%] px-[5px] bg-white" placeholder="LinkedIn" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">Github</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg" alt="Github" />
              <input disabled={edit?false:true} onChange={detectChange}  type="url" name="githubid" value={data.githubid} className="outline-none w-[100%] px-[5px] bg-white" placeholder="Github" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">Facebook</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg" alt="Facebook" />
              <input disabled={edit?false:true} onChange={detectChange}  type="url" name="facebookid" value={data.facebookid} className="outline-none w-[100%] px-[5px] bg-white" placeholder="Facebook" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">Twitter</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg" alt="Twitter" />
              <input disabled={edit?false:true} onChange={detectChange}  type="url" name="twitterid" value={data.twitterid} className="outline-none w-[100%] px-[5px] bg-white" placeholder="Twitter" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">Instagram</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg" alt="Instagram" />
              <input disabled={edit?false:true} onChange={detectChange}  type="url" name="instagramid" value={data.instagramid} className="outline-none w-[100%] px-[5px] bg-white" placeholder="Instagram" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">Website</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg" alt="Website" />
              <input disabled={edit?false:true} onChange={detectChange}   type="url" name="website" value={data.website} className="outline-none w-[100%] px-[5px] bg-white" placeholder="Website" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnTheWeb;
