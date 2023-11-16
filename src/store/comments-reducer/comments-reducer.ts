
import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../types/enums';
import { ICommentsReducer } from '../../types/interfaces';
import { setCommentAddErrors, setCommentUploadingStatus, setFilmComments } from '../action';

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
