// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    page:0,
    followers:[],
    isLoading:false,
    error:""
}


const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        fetchUserLoading:(state)=>{
            state.isLoading=true;
        },
        fetchUserSuccess:(state,{payload})=>{
            state.isLoading=false;
            state.user=payload;
        },
        fetchUserFail:(state,{payload})=>{
            state.isLoading=false;
            state.error=payload
        },
        setField:(state,{payload})=>{
            state.user.interest=payload
        },
        setFollowers:(state,{payload})=>{
            state.followers=payload;
        },
        setPage:(state,{payload})=>{
            state.page=payload;
        }
    }

})

const {reducer,actions}=userSlice;

export const {fetchUserLoading,fetchUserSuccess,fetchUserFail,setField,setFollowers,setPage}=actions;

export default reducer;