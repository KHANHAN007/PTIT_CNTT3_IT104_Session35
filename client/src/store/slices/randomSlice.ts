import { createSlice } from "@reduxjs/toolkit";
import type { RandomState } from "../../utils/types";

const initialState: RandomState = { array: [] };

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    randomNumber: (state) => {
      state.array.push(Math.floor(Math.random() * 100) + 1);
    },
  },
});

export const { randomNumber } = randomSlice.actions;
export default randomSlice.reducer;
