import { createSlice } from "@reduxjs/toolkit";
import type { User, FavoriteState } from "../../utils/types";

const initialUsers: User[] = [
  { id: 1, userName: "Nguyễn Văn A" },
  { id: 2, userName: "Nguyễn Văn B" },
  { id: 3, userName: "Nguyễn Văn C" },
  { id: 4, userName: "Nguyễn Văn D" },
  { id: 5, userName: "Nguyễn Văn E" },
];

const initialState: FavoriteState = {
  users: initialUsers,
  favorites: {
    1: true,
    3: true,
    4: true,
  },
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const userId = action.payload;
      state.favorites[userId] = !state.favorites[userId];
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
