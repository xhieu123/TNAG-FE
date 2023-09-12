import {createSlice} from "@reduxjs/toolkit";
import {login, register} from "../../service/usersService";
import jwt_decode from "jwt-decode";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user'))
}
const userSlice = createSlice({
    name: 'currentUser',
    initialState,
    extraReducers:builder => {
        builder.addCase(login.fulfilled,(state,action)=>{
            state.currentUser = action.payload.data
            const useInfo = jwt_decode(action.payload.data)
            console.log(useInfo)
            localStorage.setItem('user',JSON.stringify(useInfo))
        });
        builder.addCase(register.fulfilled,(state,action)=>{
            state.currentUser = action.payload
        })
    }
})
export default userSlice.reducer