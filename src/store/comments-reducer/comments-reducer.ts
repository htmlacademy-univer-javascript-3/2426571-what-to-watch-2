
import { createSlice } from '@reduxjs/toolkit';
import { ICommentsReducer } from '../../types/interfaces';
import { setCommentAddErrors, setCommentUploadingStatus, setFilmComments } from '../action';
import { ReducerName } from '../../types/enums';

const initialState: ICommentsReducer = {
  comments: [],
  commentUploadingStatus: false,
  commentAddErrors: [],
};

export const commentsReducer = createSlice({
  name: ReducerName.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setFilmComments, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(setCommentUploadingStatus, (state, action) => {
        state.commentUploadingStatus = action.payload;
      })
      .addCase(setCommentAddErrors, (state, action) => {
        state.commentAddErrors = action.payload;
      });
  },
});
