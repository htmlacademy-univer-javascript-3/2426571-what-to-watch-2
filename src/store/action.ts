import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../types/enums';
import { IFilm, IFilmPromo, IFilmShort, IGenre, IResponseError, IReview } from '../types/interfaces';

export const setActiveGenre = createAction<{genre: IGenre}>('films/setActiveGenre');

export const getFilmsByGenre = createAction('films/getFilmsByGenre');

export const getFilms = createAction('films/getFilms');

export const setFilms = createAction<IFilmShort[]>('films/setFilms');

export const getSimilarFilms = createAction('films/getSimilarFilms');

export const setSimilarFilms = createAction<IFilmShort[]>('films/setSimilarFilms');

export const getPromoFilm = createAction('films/getPromoFilm');

export const setPromoFilm = createAction<IFilmPromo>('films/setPromoFilm');

export const clearPromoFilm = createAction('films/clearPromoFilm');

export const getGenres = createAction('films/getGenres');

export const setGenres = createAction<IFilmShort[]>('films/setGenres');

export const setFilmsLoadingStatus = createAction<boolean>('films/setFilmsLoadingStatus');

export const setFilmLoadingStatus = createAction<boolean>('films/setFilmLoadingStatus');

export const setSimilarFilmsLoadingStatus = createAction<boolean>('films/setSimilarFilmsLoadingStatus');

export const setFilmLoadingError = createAction<string>('films/setFilmLoadingError');

export const getFilm = createAction('films/getFilm');

export const setFilm = createAction<IFilm>('films/setFilm');

export const clearFilm = createAction('films/clearFilm');


export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setAuthorizationErrors = createAction<IResponseError[]>('user/setAuthorizationErrors');

export const getAuthorizationStatus = createAction('user/getAuthorizationStatus');

export const login = createAction('user/login');

export const logout = createAction('user/logout');


export const getFilmComments = createAction('comments/getFilmComments');

export const setFilmComments = createAction<IReview[]>('comments/setFilmComments');

export const addFilmComment = createAction<IReview[]>('comments/addFilmComment');

export const setCommentUploadingStatus = createAction<boolean>('comments/setCommentUploadingStatus');

export const setCommentAddErrors = createAction<IResponseError[]>('comments/setCommentAddErrors');


export const getFavorites = createAction('favorites/getFavorites');

export const setFavorites = createAction<IFilmShort[]>('favorites/setFavorites');

export const setFavoritesLoadingStatus = createAction<boolean>('favorites/setFavoritesLoadingStatus');
