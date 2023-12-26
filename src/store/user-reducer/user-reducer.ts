import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, ReducerName } from '../../types/enums';
import { IUserReducer } from '../../types/interfaces';
import { setAuthorizationErrors, setAuthorizationStatus } from '../action';

const initialState: IUserReducer = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  authorizationErrors: [],
};

export const userReducer = createSlice({
  name: ReducerName.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setAuthorizationStatus, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(setAuthorizationErrors, (state, action) => {
        state.authorizationErrors = action.payload;
      });
  },
});
