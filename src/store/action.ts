import { createAction } from '@reduxjs/toolkit';
import { IFilmPreview, IFilmPromo, IGenre } from '../types/interfaces';

export const setActiveGenre = createAction<{genre: IGenre}>('film/setActiveGenre');

export const getFilmsByGenre = createAction('film/getFilmsByGenre');

export const getFilms = createAction('films/getFilms');

export const setFilms = createAction<IFilmPreview[]>('films/setFilms');

export const getPromoFilm = createAction('films/getPromoFilm');

export const setPromoFilm = createAction<IFilmPromo>('films/setPromoFilm');

export const setGenres = createAction<IFilmPreview[]>('genres/setGenres');

export const getGenres = createAction('genres/getGenres');

export const setFilmsLoadingStatus = createAction<boolean>('films/setFilmsLoadingStatus');
