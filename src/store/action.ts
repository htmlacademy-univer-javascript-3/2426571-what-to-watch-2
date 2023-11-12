import { createAction } from '@reduxjs/toolkit';
import { IAuthorizationError, IFilmPreview, IFilmPromo, IGenre } from '../types/interfaces';
import { AuthorizationStatus } from '../types/enums';

export const setActiveGenre = createAction<{genre: IGenre}>('film/setActiveGenre');

export const getFilmsByGenre = createAction('film/getFilmsByGenre');

export const getFilms = createAction('films/getFilms');

export const setFilms = createAction<IFilmPreview[]>('films/setFilms');

export const getPromoFilm = createAction('films/getPromoFilm');

export const setPromoFilm = createAction<IFilmPromo>('films/setPromoFilm');

export const setGenres = createAction<IFilmPreview[]>('films/setGenres');

export const getGenres = createAction('films/getGenres');

export const setFilmsLoadingStatus = createAction<boolean>('films/setFilmsLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setAuthorizationErrors = createAction<IAuthorizationError[]>('user/setAuthorizationErrors');

export const checkAuth = createAction('user/checkAuth');

export const login = createAction('user/login');

export const logout = createAction('user/logout');
