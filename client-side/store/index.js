import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { favSlice } from "./favSlice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    fav: favSlice.reducer,
  },
});
