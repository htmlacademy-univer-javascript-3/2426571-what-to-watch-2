
import { createSlice } from '@reduxjs/toolkit';
import { ICommentsReducer } from '../../types/interfaces';
import { setFilmComments } from '../action';
import { ReducerName } from '../../types/enums';

const initialState: ICommentsReducer = {
  comments: [],
};

export const commentsReducer = createSlice({
  name: ReducerName.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setFilmComments, (state, action) => {
        state.comments = action.payload;
      });
  },
});
