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
    error: null
  },
  reducers: {
    clearError(state) {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action);
        if (action.payload.id) {
          state.value = action.payload;
          state.error = null;
        } else {
          state.error = action.payload.message;
        }
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
export const { clearError } = UserSlice.actions;

