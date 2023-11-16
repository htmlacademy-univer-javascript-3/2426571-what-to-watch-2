
import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../types/enums';
import { IFavoritesReducer } from '../../types/interfaces';
import { setFavorites } from '../action';

const initialState: IFavoritesReducer = {
  favorites: [],
  favoritesLoadingStatus: false,
};

export const favoritesReducer = createSlice({
  name: ReducerName.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setFavorites, (state, action) => {
        state.favorites = action.payload;
      });
  },
});
