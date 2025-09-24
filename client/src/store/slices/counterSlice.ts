import { createSlice } from "@reduxjs/toolkit";
import type { CounterState } from "../../utils/types";

const initialState: CounterState = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increase, decrease, reset } = counterSlice.actions;
export default counterSlice.reducer;
