import { createAction } from '@reduxjs/toolkit';
import { IAuthorizationError, IFilm, IFilmShort, IFilmPromo, IGenre, IReview } from '../types/interfaces';
import { AuthorizationStatus } from '../types/enums';

export const setActiveGenre = createAction<{genre: IGenre}>('film/setActiveGenre');

export const getFilmsByGenre = createAction('film/getFilmsByGenre');

export const getFilms = createAction('films/getFilms');

export const setFilms = createAction<IFilmShort[]>('films/setFilms');

export const getSimilarFilms = createAction('films/getSimilarFilms');

export const setSimilarFilms = createAction<IFilmShort[]>('films/setSimilarFilms');

export const getPromoFilm = createAction('films/getPromoFilm');

export const setPromoFilm = createAction<IFilmPromo | null>('films/setPromoFilm');

export const setGenres = createAction<IFilmShort[]>('films/setGenres');

export const getGenres = createAction('films/getGenres');

export const setFilmsLoadingStatus = createAction<boolean>('films/setFilmsLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setAuthorizationErrors = createAction<IAuthorizationError[]>('user/setAuthorizationErrors');

export const getAuthorizationStatus = createAction('user/getAuthorizationStatus');

export const login = createAction('user/login');

export const logout = createAction('user/logout');

export const getFilm = createAction('films/getFilm');

export const setFilm = createAction<IFilm | null>('films/setFilm');

export const getFilmComments = createAction('comments/getFilmComments');

export const setFilmComments = createAction<IReview[]>('comments/setFilmComments');

export const getFavorites = createAction('favorites/getFavorites');

export const setFavorites = createAction<IFilmShort[]>('favorites/setFavorites');

export const setFavoritesLoadingStatus = createAction<boolean>('favorites/setFavoritesLoadingStatus');
