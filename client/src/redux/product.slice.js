/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { favFetch, productsFetch } from './product.api';

export const getProducts = createAsyncThunk(
  'product/get',
  async () => {
    const response = await productsFetch();
    return response;
  },
);

export const addFav = createAsyncThunk(
  'product/fav',
  async ({ productId, user }) => {
    const response = await favFetch({ productId, user });
    return response;
  },
);

const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    products: null,
    status: 'idle',
    oneProduct: null,
    loaded: false
  },
  reducers: {
    selectOneProduct(state, action) {
      state.oneProduct = action.payload.product;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(addFav.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addFav.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loaded = action.payload;
      });
  },
});

export const { selectOneProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
