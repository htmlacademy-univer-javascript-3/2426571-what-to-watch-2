import { createAction } from '@reduxjs/toolkit';
import { IAuthorizationError, IFilm, IFilmPreview, IFilmPromo, IGenre, IReview } from '../types/interfaces';
import { AuthorizationStatus } from '../types/enums';

export const setActiveGenre = createAction<{genre: IGenre}>('film/setActiveGenre');

export const getFilmsByGenre = createAction('film/getFilmsByGenre');

export const getFilms = createAction('films/getFilms');

export const setFilms = createAction<IFilmPreview[]>('films/setFilms');

export const getSimilarFilms = createAction('films/getSimilarFilms');

export const setSimilarFilms = createAction<IFilmPreview[]>('films/setSimilarFilms');

export const getPromoFilm = createAction('films/getPromoFilm');

export const setPromoFilm = createAction<IFilmPromo | null>('films/setPromoFilm');

export const setGenres = createAction<IFilmPreview[]>('films/setGenres');

export const getGenres = createAction('films/getGenres');

export const setLoadingStatus = createAction<boolean>('films/setLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setAuthorizationErrors = createAction<IAuthorizationError[]>('user/setAuthorizationErrors');

export const checkAuth = createAction('user/checkAuth');

export const login = createAction('user/login');

export const logout = createAction('user/logout');

export const getFilm = createAction('films/getFilm');

export const setFilm = createAction<IFilm | null>('films/setFilm');

export const getFilmComments = createAction('comments/getFilmComments');

export const setFilmComments = createAction<IReview[]>('comments/setFilmComments');

export const getFavorites = createAction('favorites/getFavorites');

export const setFavorites = createAction<IFilmPreview[]>('favorites/setFavorites');
