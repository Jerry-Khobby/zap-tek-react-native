import { createSlice } from "@reduxjs/toolkit";
import { brand } from "../data/brand";

const initialState = {
  favs: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav: (state, action) => {
      const NewFav = action.payload;
      state.favs.push({ brand: NewFav });
    },
    removeFav: (state, action) => {
      const NewFav = action.payload;
      state.favs = state.favs.filter((fav) => fav !== NewFav);
    },
  },
});
