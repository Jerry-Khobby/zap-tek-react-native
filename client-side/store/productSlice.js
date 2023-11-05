import { createSlice } from "@reduxjs/toolkit";
import { brand } from "../data/brand";

const initialState = {
  products: brand,
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const brandId = action.payload;
      state.selectedProduct = state.products.find((b) => b.id === brandId);
    },
  },
});
