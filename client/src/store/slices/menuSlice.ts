import { createSlice } from "@reduxjs/toolkit";
import type { MenuState } from "../../utils/types";
const initialState: MenuState = {
  isCollapsed: false,
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});
export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
