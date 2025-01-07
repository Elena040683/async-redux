import { createReducer } from '@reduxjs/toolkit';
import { getImagesRequest, getImagesSuccess, getImagesError } from './actions';

export const images = createReducer([], (builder) => {
  builder.addCase(getImagesSuccess, (state, action) => {
    return [...state, ...action.payload];
  })
});

export const loading = createReducer(false, (builder) => {
  builder
    .addCase(getImagesRequest, (_, action) => true)
    .addCase(getImagesSuccess, (_, action) => false)
    .addCase(getImagesError, (_, action) => false)
});

export const error = createReducer(null, (builder) => {
  builder
    .addCase(getImagesError, (_, action) => action.payload)
});

