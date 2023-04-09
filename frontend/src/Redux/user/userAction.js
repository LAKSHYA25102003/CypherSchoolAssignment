import { fetchUserLoading, fetchUserSuccess, fetchUserFail, setField,setPage,setFollowers } from "./userSlice";
import showToast from "../../Utils/showToast";
import axios from "axios"
import { setLoader } from "../loader/loaderAction";

export const createUser = (user, clearUser) => async (dispatch) => {
    try {
        dispatch(setLoader(true));
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        const response = await result.json();
        if (response.success) {
            clearUser();
            showToast({
                msg: "Successfully registered",
                type: "success"
            });
        }
        dispatch(setLoader(false));


    } catch (error) {
        console.log(error.message)
    }
}



export const loginUser = (user, clearUser) => async (dispatch) => {
    try {
        dispatch(setLoader(true));
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/signin`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        const response = await result.json();
        if (response.success) {
            clearUser();
            showToast({
                msg: "Successfully login",
                type: "success"
            });
            dispatch(fetchUserSuccess(response.user));
            localStorage.setItem("token", response.token);
        }
        else {
            showToast({
                msg: response.message,
                type: "error"
            });
        }
        dispatch(setLoader(false));
    } catch (error) {
        console.log(error.message)

    }
}

export const updateUser = () => async (dispatch) => {
    
    try {
        dispatch(fetchUserSuccess(null));
    } catch (error) {
        console.log(error.message)

    }
}

export const setFieldInterest = ({ user, field, set }) => async (dispatch) => {
    try {
        if (set) {
            let ni = [...user.interest, field];
            dispatch(setField(ni));
        }
        else {
            let ni = [...user.interest];
            for (let i = 0; i < ni.length; i++) {
                if (ni[i] === field) {
                    ni.splice(i, 1);
                    break;
                }
            }
            dispatch(setField(ni));
        }
    } catch (error) {
        console.log(error.message)

    }
}

export const updatePassword = (data, setModal) => async (dispatch) => {

    try {
        dispatch(setLoader(true));
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/changepass`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        })
        const response = await result.json();
        if (response.success) {
            setModal(false);
            dispatch(fetchUserSuccess(response.user));
            showToast({
                msg: "Password is updated successfully",
                type: "success"
            })
        }
        else {
            dispatch(fetchUserFail(response.message));
            showToast({
                msg: response.message,
                type: "error"
            })
        }
        dispatch(setLoader(false));
    } catch (error) {
        console.log(error.message)
        dispatch(fetchUserFail(error.message))
    }
}

export const fetchUser = () => async (dispatch) => {
    try {
        dispatch(fetchUserLoading());
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/user/getUser`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        })
        const response = await result.json();
        if (response.success) {
            dispatch(fetchUserSuccess(response.user));
        }
        else {
            dispatch(fetchUserFail(response.message));
        }

    } catch (error) {
        console.log(error.message)
        dispatch(fetchUserFail(error.message))

    }
}

export const fetchFollowers = (page,followers) => async (dispatch) => {
    try {
        dispatch(setLoader(true));
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/user/getFollowers`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body:JSON.stringify({page:page+1})
        })
        const response = await result.json();
        
        if (response.success) {
            let np=page+1;
            dispatch(setPage(np));
            let nf=[...followers];
            for(let i=0;i<response.followers.length;i++)
            {
                nf.push(response.followers[i]);
            }
            dispatch(setFollowers(nf));
        }
        dispatch(setLoader(false));
    } catch (error) {
        console.log(error.message)
    }
}




export const updateDetails = (data, setModal = "") => async (dispatch) => {
    try {
        dispatch(setLoader(true));
        dispatch(fetchUserLoading());
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/user/updateinfo`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        })
        const response = await result.json();

        if (response.success) {
            if (setModal !== "") {
                setModal(false);
            }
            dispatch(fetchUserSuccess(response.user));
            showToast({
                msg: "Successfully saved",
                type: "success"
            })
        }
        else {

            dispatch(fetchUserFail(response.message));
        }
        dispatch(setLoader(false));

    } catch (error) {
        console.log(error.message)
        dispatch(fetchUserFail(error.message))

    }
}


export const updateProfilePic = (file, data,setModal) => async (dispatch) => {
    try {
        dispatch(setLoader(true));
        if (file !== null) {
            let formData = new FormData();
            formData.append("profilepic", file);
            const response = await axios({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/user/updateprofilepic`,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    'auth-token': localStorage.getItem('token')
                },
            })

            console.log({ response })
        }
        dispatch(setLoader(false));
        dispatch(updateDetails(data,setModal));
        // if (response.success) {
        //     if(setModal!=="")
        //     {
        //         setModal(false);
        //     }
        //     dispatch(fetchUserSuccess(response.user));
        //     showToast({
        //         msg: "Successfully saved",
        //         type: "success"
        //     })
        // }
        // else {

        //     dispatch(fetchUserFail(response.message));
        // }

    } catch (error) {
        console.log(error.message)
        dispatch(fetchUserFail(error.message))

    }
}

export const followUnfollow = ({friendId}) => async (dispatch) => {
    try {
        dispatch(setLoader(true));
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/user/followUnfollow`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body:JSON.stringify({id:friendId})
        })
        const response = await result.json();
        if (response.success) {
            dispatch(fetchUserSuccess(response.user))
        }
        dispatch(setLoader(false));
    } catch (error) {
        console.log(error.message)
    }
}


