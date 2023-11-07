import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favs: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav: (state, action) => {
      const NewFav = action.payload.brand;
      state.favs.push({ NewFav });
    },
    removeFav: (state, action) => {
      const NewFav = action.payload;
      state.favs = state.favs.filter((fav) => fav !== NewFav);
    },
  },
});
