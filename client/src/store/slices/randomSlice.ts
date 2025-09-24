import { createSlice } from "@reduxjs/toolkit";

const randomSlice = createSlice({
    name: 'random',
    initialState: { array: [] },
    reducers: {
        randomNumber:(state)=> {
            state.array.push()
        }
    }
});