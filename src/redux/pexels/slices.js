import {createSlice} from  '@reduxjs/toolkit';
import {getThunkData} from './operations';


const pexelSlice = createSlice({
  name: "pexels",
  initialState: {
    images: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getThunkData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getThunkData.fulfilled, (state, action) => {
        state.images = [...state.images, ...action.payload];
        state.loading = false;
      })
      .addCase(getThunkData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export default pexelSlice.reducer;
