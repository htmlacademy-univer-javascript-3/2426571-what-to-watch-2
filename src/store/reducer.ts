import { combineReducers } from '@reduxjs/toolkit';
import { authorizationReducer } from './authorization-reducer/authorization-reducer';
import { filmsReducer } from './films-reducer/films-reducer';
import { ReducerName } from '../types/enums';

export const reducer = combineReducers({
  [ReducerName.Films]: filmsReducer.reducer,
  [ReducerName.Authorization]: authorizationReducer.reducer,
});
