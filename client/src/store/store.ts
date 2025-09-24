import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import randomSlice from "./slices/randomSlice";
import toggleThemeSlice from "./slices/toggleThemeSlice";
import toggleViewSlice from "./slices/toggleViewSlice";
import menuSlice from "./slices/menuSlice";
import languageSlice from "./slices/languageSlice";
import favoriteSlice from "./slices/favoriteSlice";
import authSlice from "./slices/authSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    random: randomSlice,
    toggleTheme: toggleThemeSlice,
    toggleView: toggleViewSlice,
    menu: menuSlice,
    language: languageSlice,
    favorite: favoriteSlice,
    auth: authSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
