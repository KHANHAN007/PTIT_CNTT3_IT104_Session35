import { createSlice } from "@reduxjs/toolkit";
import type { ToggleViewState } from "../../utils/types";

const initialState: ToggleViewState = { isListView: "column" };
const toggleViewSlice = createSlice({
  name: "toggleView",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.isListView = state.isListView === "row" ? "column" : "row";
    },
  },
});
export const { toggleView } = toggleViewSlice.actions;
export default toggleViewSlice.reducer;
