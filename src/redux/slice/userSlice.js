import {createSlice} from "@reduxjs/toolkit";
import {login, register} from "../../service/usersService";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user'))
}
const userSlice = createSlice({
    name: 'currentUser',
    initialState,
    extraReducers:builder => {
        builder.addCase(login.fulfilled,(state,action)=>{
            state.currentUser = action.payload.data
            localStorage.setItem('user'.JSON.stringify(action.payload.data))
        });
        builder.addCase(register.fulfilled,(state,action)=>{
            state.currentUser = action.payload
        })
    }
})
export default userSlice.reducer