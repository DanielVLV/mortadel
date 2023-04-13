import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const signUpUser = createAsyncThunk(
  'user/signUp',
  async () => {
    const response = await signUpFetch();
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
