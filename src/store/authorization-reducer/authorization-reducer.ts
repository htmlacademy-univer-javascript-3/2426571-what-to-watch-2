import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, ReducerName } from '../../types/enums';
import { setAuthorizationStatus } from '../action';
import { IAuthorizationReducer } from '../../types/interfaces';

const initialState: IAuthorizationReducer = {
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const authorizationReducer = createSlice({
  name: ReducerName.Authorization,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setAuthorizationStatus, (state, action) => {
        state.authorizationStatus = action.payload;
      });
  },
});
