import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../Redux/user/userAction";
import showToast from "../Utils/showToast";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function UpdatePasswordModal({ setModal }) {
  const dispatch = useDispatch();
  const [showNewPassword, setshowNewPassword] = useState(false);
  const [showConPassword, setshowConPassword] = useState(false);
  const [showCurrPassword, setshowCurrPassword] = useState(false);
  const [data, setData] = useState({
    old_password: "",
    newpassword: "",
    confirmpassword: "",
  });
  const detectChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const save = (e) => {
    e.preventDefault();
    if (data.newpassword !== data.confirmpassword) {
      showToast({
        msg: "New password is not matching with confirm password.",
        type: "error",
      });
      return;
    }
    dispatch(updatePassword(data, setModal));
  };
  return (
    <div className="w-[100%] h-[100%]">
      <div className="flex  justify-center items-center h-[100%] w-[100%] md:w-[60%] mx-auto ">
        <form
          onSubmit={save}
          className="gap-[20px] flex flex-col p-[20px] bg-white rounded-[10px] w-[80%] drop-shadow-lg border-[1px] border-gray-400 z-[100]"
        >
          <div className="flex text-center justify-between text-[22px] font-bold">
            <span>Update Password</span>
            <span
              className="cursor-pointer"
              onClick={() => {
                setModal(false);
              }}
            >
              <CloseOutlinedIcon />
            </span>
          </div>
          <div className="flex gap-1">
            <div className="w-[100%] flex flex-col gap-[5px]">
              <div className="flex flex-col gap-1 ">
                <p className="text-[18px] font-medium">Current Password</p>
                <div className="flex justify-between gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
                  <input
                    minLength={5}
                    onChange={detectChange}
                    value={data.old_password}
                    name="old_password"
                    type={!showCurrPassword ? "password" : "text"}
                    className="outline-none w-[100%] px-[5px]"
                    required
                  />
                  <div
                    onClick={() => {
                      setshowCurrPassword(!showCurrPassword);
                    }}
                  >
                    <RemoveRedEyeIcon />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="text-[18px] font-medium">New Password</p>
                <div className="flex justify-between gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
                  <input
                    minLength={5}
                    onChange={detectChange}
                    value={data.newpassword}
                    name="newpassword"
                    type={!showNewPassword ? "password" : "text"}
                    className="outline-none w-[100%] px-[5px]"
                    required
                  />
                  <div
                    onClick={() => {
                      setshowNewPassword(!showNewPassword);
                    }}
                  >
                    <RemoveRedEyeIcon />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="text-[18px] font-medium">Confirm new Password</p>
                <div className="flex justify-between gap-1 border-[1px] border-gray-500 rounded-md p-[5px] bg-white">
                  <input
                    minLength={5}
                    onChange={detectChange}
                    value={data.confirmpassword}
                    name="confirmpassword"
                    type={!showConPassword ? "password" : "text"}
                    className="outline-none w-[100%] px-[5px]"
                    required
                  />
                  <div
                    onClick={() => {
                      setshowConPassword(!showConPassword);
                    }}
                  >
                    <RemoveRedEyeIcon />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => {
                    setModal(false);
                  }}
                  className="bg-black text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#f3912e] text-[18px] font-medium text-white p-[2px] px-[10px] rounded-md"
                >
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

export default UpdatePasswordModal;
