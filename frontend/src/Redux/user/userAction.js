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


// export const loginUser=({data,clearData,setLoading})=>async (dispatch)=>{
//     try{
//         dispatch(setLoader(true));
//         let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/login`,{
//             method:"post",
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             body:JSON.stringify(data)
//         })
//         const response=await result.json();
//         if(response.success)
//         {
//             clearData();
//             showToast({
//                 msg:"Successfully login",
//                 type:"success"
//             });
//             dispatch(fetchUserSuccess(response.user));
//             localStorage.setItem("token",response.token);
//             dispatch(fetchBuckets());

//         }
//         else
//         {
//             showToast({
//                 msg:response.message,
//                 type:"success"
//             });
//         }
//         dispatch(setLoader(false));
        
//     }catch(error){
//         console.log(error.message)
        
//     }
// }

// export const updateUser=()=>async (dispatch)=>{
    
//     try{
//         dispatch(fetchUserSuccess(null));
//     }catch(error){
//         console.log(error.message)
        
//     }
// }

// export const fetchUser=()=>async (dispatch)=>{
    
//     try{
//        dispatch(fetchUserLoading());
//         let result=await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/getUser`,{
//             method:"post",
//             headers:{
//                 "Content-Type":"application/json",
//                 "token":localStorage.getItem("token")
//             }
//         })
//         const response=await result.json();
//         if(response.success)
//         {
//             dispatch(fetchUserSuccess(response.user));
//         }
//         else
//         {
//             dispatch(fetchUserFail(response.message));
//         }
        
//     }catch(error){
//         console.log(error.message)
//         dispatch(fetchUserFail(error.message))
        
//     }
// }


