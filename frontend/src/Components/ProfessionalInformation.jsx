import React from "react";

function ProfessionalInformation() {
  return (
    <div className="px-[40px] py-[20px] ">
      <div className="border-b-[1.5px] border-gray-400 flex flex-col gap-[20px] pb-[30px]">
        <div className="text-[20px] font-bold flex justify-between">
          <p>PROFESSIONAL INFORMATION</p>
          <button className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md">
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-medium">Highest education</p>
            <div className="flex gap-1    bg-white">
              <select
                className="w-[100%] text-gray-500 rounded-md  border-[1px] border-gray-500 outline-none py-[5px]"
                name="education"
                id="education"
              >
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="Higher Secondary">Higher Secondary</option>
                <option value="Graduation">Graduation</option>
                <option value="Post Graduation">Post Graduation</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-medium">What do you do currently?</p>
            <div className="flex gap-1   bg-white">
              <select
                className="w-[100%] text-gray-500 rounded-md  border-[1px] border-gray-500 outline-none py-[5px]"
                name="current"
                id="current"
              >
                <option value="Primary">Schooling</option>
                <option value="Secondary">College Student</option>
                <option value="Higher Secondary">Teaching</option>
                <option value="Graduation">Job</option>
                <option value="Post Graduation">Freelancing</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalInformation;
