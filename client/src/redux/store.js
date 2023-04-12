/* eslint-disable quotes */
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product.slice";
import { CartReducer } from "./CartRedux/cart.reducer";

const store = configureStore({
  reducer: {
    ProductSlice,
    CartReducer,
  },
});

export default store;
