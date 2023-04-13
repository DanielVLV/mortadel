/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import signUpFetch from './user.api';

export const signUpUser = createAsyncThunk(
  'user/signUp',
  async (data) => {
    const response = await signUpFetch(data);
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
      });
  },
});
export default UserSlice.reducer;
