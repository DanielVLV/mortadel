/* eslint-disable quotes */
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product.slice";
import { CartReducer } from "./CartRedux/cart.reducer";
import UserSlice from './user.slice';

const store = configureStore({
  reducer: {
    ProductSlice,
    CartReducer,
    UserSlice,
  },
});

export default store;
