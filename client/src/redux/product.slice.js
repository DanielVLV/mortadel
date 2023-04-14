/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsFetch } from './product.api';

export const getProducts = createAsyncThunk(
  'product/get',
  async () => {
    const response = await productsFetch();
    return response;
  },
);

const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    products: null,
    status: 'idle',
    oneProduct: null
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
      });
  },
});

export const { selectOneProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
