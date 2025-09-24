import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n";

export interface LanguageState {
  currentLanguage: "en" | "vi";
}

const initialState: LanguageState = {
  currentLanguage: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      const newLanguage = state.currentLanguage === "en" ? "vi" : "en";
      state.currentLanguage = newLanguage;
      i18n.changeLanguage(newLanguage);
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
