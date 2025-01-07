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
        // return {
        //   ...state,
        //   loading: true,
        // }
      })
      .addCase(getThunkData.fulfilled, (state, action) => {
       
        // const newImages = {}
        // action.payload.map(el => {
        //   newImages[el.id] = el
        // })
        // state.images = newImages
        //  state.loading = false;
        return {
          ...state,
          images: action.payload,
          loading: false,
        }
      })
      .addCase(getThunkData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // return {
        //   ...state,
        //   loading: false,
        //   error: action.payload,
        // }
      })
  }
})

export default pexelSlice.reducer;

// const pexelSlice = createSlice({
//   name: 'pexels',
//   initialState: {
//     images: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: {
//     [getThunkData.pending]: (state, action) => {
//       return {
//         ...state,
//         loading: true,
//       };
//     },
//     [getThunkData.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         images: [...state.images, ...action.payload],
//         loading: false,
//       };
//     },
//     [getThunkData.rejected]: (state, action) => {
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     },
//   },
// });
// export default pexelSlice.reducer;