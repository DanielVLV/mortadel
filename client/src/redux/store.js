/* eslint-disable quotes */
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import ProductSlice from "./product.slice";
import { CartReducer } from "./CartRedux/cart.reducer";
import UserSlice from './user.slice';
import searchInputReducer from "./saga/searchInput/searchInputReducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    ProductSlice,
    CartReducer,
    UserSlice,
    searchInputReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
