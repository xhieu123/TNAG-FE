import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import foodReducer from "./slice/merchantSlice"
export const store = configureStore({
    reducer:{
        user: userReducer,
        food: foodReducer
    }
})