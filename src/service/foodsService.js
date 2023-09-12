import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getFood = createAsyncThunk(
    'blogs/getBlogs',
    async () =>{
        return await axios.get('http://localhost:8080/foods')
    }
)

export const addFood = createAsyncThunk(
    'blogs/addBlogs',
    async (data) =>{
        const res  = await axios.post('http://localhost:8080/foods',data)
        return res.data
    }
)
export const deleteFood = createAsyncThunk(
    'blogs/deleteBlogs',
    async (id) =>{
        return await axios.delete(`'http://localhost:8080/foods'/${id}`)
    })
export const updateFood = createAsyncThunk(
    'blogs/updateBlogs',
    async (id) =>{
        return await axios.put(`'http://localhost:8080/foods'/${id}`)
    })

