import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice"
import loaderSlice from "./loader/loaderSlice"


const store=configureStore({
    reducer:{
        user:userSlice,
        loader:loaderSlice
    }
})

export default store;