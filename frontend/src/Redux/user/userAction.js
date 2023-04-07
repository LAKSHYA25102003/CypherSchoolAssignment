import {fetchUserLoading,fetchUserSuccess,fetchUserFail} from "./userSlice";
import showToast from "../../Utils/showToast";

export const createUser=(user,clearUser)=>async (dispatch)=>{
    try{
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/auth/signup`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
        })
        const response=await result.json();
        if(response.success)
        {
            clearUser();
            showToast({
                msg:"Successfully registered",
                type:"success"
            });
        }
       
        
    }catch(error){
        console.log(error.message)
    }
}



export const loginUser = (user,clearUser)=>async (dispatch)=>{
    try{
        
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/auth/signin`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
        })
        const response=await result.json();
        if(response.success)
        {
            clearUser();
            showToast({
                msg:"Successfully login",
                type:"success"
            });
            dispatch(fetchUserSuccess(response.user));
            localStorage.setItem("token",response.token);
        }
        else
        {
            showToast({
                msg:response.message,
                type:"success"
            });
        }
    }catch(error){
        console.log(error.message)
        
    }
}

export const updateUser=()=>async (dispatch)=>{
    
    try{
        dispatch(fetchUserSuccess(null));
    }catch(error){
        console.log(error.message)
        
    }
}

export const fetchUser=()=>async (dispatch)=>{
    
    try{
       dispatch(fetchUserLoading());
        let result=await fetch(`${process.env.REACT_APP_BASE_URL}/user/getUser`,{
            method:"get",
            headers:{
                "Content-Type":"application/json",
                "auth-token":localStorage.getItem("token")
            }
        })
        const response=await result.json();
        if(response.success)
        {
            dispatch(fetchUserSuccess(response.user));
        }
        else
        {
            dispatch(fetchUserFail(response.message));
        }
        
    }catch(error){
        console.log(error.message)
        dispatch(fetchUserFail(error.message))
        
    }
}


