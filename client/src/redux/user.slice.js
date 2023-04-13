/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUserFetch, signoutFetch, signUpFetch } from './user.api';

export const signUpUser = createAsyncThunk(
  'user/signUp',
  async (data) => {
    const response = await signUpFetch(data);
    return response;
  },
);

export const checkUser = createAsyncThunk(
  'user/checkUser',
  async () => {
    const response = await checkUserFetch();
    return response;
  },
);

export const signoutUser = createAsyncThunk(
  'user/signout',
  async (user) => {
    const response = await signoutFetch(user);
    return response;
  },
);

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(checkUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(signoutUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signoutUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});
export default UserSlice.reducer;
