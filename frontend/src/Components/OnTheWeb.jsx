import React from "react";


function OnTheWeb() {
  return (
    <div className="px-[40px] py-[20px] ">
      <div className="border-b-[1.5px] border-gray-400 flex flex-col gap-[20px] pb-[30px]">
        <div className="text-[20px] font-bold flex justify-between ">
          <p>ON THE WEB</p>
          <button className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md">
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">LinkedIn</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" alt="LinkedIn" />
              <input  type="url" className="outline-none w-[100%] px-[5px]" placeholder="LinkedIn" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">Github</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg" alt="Github" />
              <input  type="url" className="outline-none w-[100%] px-[5px]" placeholder="Github" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">Facebook</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg" alt="Facebook" />
              <input  type="url" className="outline-none w-[100%] px-[5px]" placeholder="Facebook" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">Twitter</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg" alt="Twitter" />
              <input  type="url" className="outline-none w-[100%] px-[5px]" placeholder="Twitter" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">Instagram</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg" alt="Instagram" />
              <input  type="url" className="outline-none w-[100%] px-[5px]" placeholder="Instagram" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-[18px] font-medium">Website</p>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
              <img src="https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg" alt="Website" />
              <input  type="url" className="outline-none w-[100%] px-[5px]" placeholder="Website" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnTheWeb;
