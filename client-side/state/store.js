import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./reducers";

const store = configureStore({
    reducer: {
      wishlist: wishListReducer,
      // Add other reducers here if you have more slices in your application
    },
    // Add middleware or other configuration options as needed
  });
  
  export default store;