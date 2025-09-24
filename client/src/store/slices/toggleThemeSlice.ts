import { createSlice } from "@reduxjs/toolkit";
import type { ToggleThemeState } from "../../utils/types";

const initialState: ToggleThemeState = { darkMode: false };
const toggleThemeSlice = createSlice({
  name: "toggleTheme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggle } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;
