import { combineReducers } from '@reduxjs/toolkit';
import { ReducerName } from '../types/enums';
import { commentsReducer } from './comments-reducer/comments-reducer';
import { favoritesReducer } from './favorites-reducer/favorites-reducer';
import { filmsReducer } from './films-reducer/films-reducer';
import { authorizationReducer } from './user-reducer/user-reducer';

export const reducer = combineReducers({
  [ReducerName.Films]: filmsReducer.reducer,
  [ReducerName.Favorites]: favoritesReducer.reducer,
  [ReducerName.Comments]: commentsReducer.reducer,
  [ReducerName.User]: authorizationReducer.reducer,
});
