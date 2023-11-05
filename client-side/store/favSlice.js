import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favs: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav: (state, action) => {
      const favId = action.payload;
      state.favs.push(favId);
    },
    removeFav: (state, action) => {
      const favId = action.payload;
      state.favs = state.favs.filter((fav) => fav !== favId);
    },
  },
});
