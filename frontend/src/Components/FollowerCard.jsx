import React from 'react'
const avatar= require("../Images/avatar.jpg")

function FollowerCard() {
  return (
    <div className='flex flex-col p-[10px] gap-1 border-[2px] rounded-[15px] border-gray-400 drop-shadow-md bg-white'>
      <div className='w-[100%] flex justify-center items-center'>
        <img src={avatar}  className='w-[100px] h-[100px] rounded-[50%] border-[1px] border-gray-400' alt="" />
      </div>
      <div className='flex flex-col text-[18px] font-medium py-[5px]'>
        <div>Lakshya</div>
        <div>Education</div>
        <div>10 followers</div>
      </div>
      <div className='w-[100%]'>
        <button className='text-center w-[100%] text-[15px] font-medium text-white bg-[#f3912e] px-[10px] py-[5px] rounded-[13px]'>Follow</button>
      </div>
    </div>
  )
}

export default FollowerCard
