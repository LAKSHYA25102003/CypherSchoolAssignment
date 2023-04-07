import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateDetails } from "../Redux/user/userAction";

function ProfessionalInformation() {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const { user } = useSelector((store) => {
    return store.user;
  });
  const [data, setData] = useState({
    highestEdu: user.proffInfo.highestEdu,
    currProff: user.proffInfo.currProff,
  });
  const detectChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const save = () => {
    if (edit) {
      setEdit(false);
      dispatch(updateDetails(data));
    }
    else
    {
      setEdit(true);
    }
  };
  return (
    <div className="px-[40px] py-[20px] ">
      <div className="border-b-[1.5px] border-gray-400 flex flex-col gap-[20px] pb-[30px]">
        <div className="text-[20px] font-bold flex justify-between">
          <p>PROFESSIONAL INFORMATION</p>
          <button
            onClick={save}
            className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md"
          >
            {edit ? "Save" : "Edit"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-medium">Highest education</p>
            <div className="flex gap-1    bg-white">
              <select
                className="w-[100%] text-gray-500 rounded-md  border-[1px] bg-white border-gray-500 outline-none py-[5px]"
                name="highestEdu"
                disabled={edit?false:true}
                onChange={detectChange}
                value={data.highestEdu}
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
                className="w-[100%] text-gray-500 rounded-md  border-[1px] bg-white border-gray-500 outline-none py-[5px]"
                name="currProff"
                id="current"
                disabled={edit?false:true}
                onChange={detectChange}
                value={data.currProff}
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
