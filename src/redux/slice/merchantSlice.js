import {createSlice} from "@reduxjs/toolkit";
import {addFood, getFood} from "../../service/foodsService";

const initialState = {
    food: []
}
const foodSlice =createSlice({
    name: 'foods',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getFood.fulfilled, (state, action) =>{
            state.food = action.payload.data
        })
        builder.addCase(addFood.fulfilled, (state, action) =>{
            console.log("foodSlice",action.payload)
            state.food.push(action.payload)
        })
    }
})
export default foodSlice.reducer