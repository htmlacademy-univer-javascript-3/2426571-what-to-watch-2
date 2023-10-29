import { createAction } from '@reduxjs/toolkit';
import { IGenre } from '../types/interfaces';

export const setActiveGenre = createAction<{genre: IGenre}>('film/setActiveGenre');

export const getFilmsByGenre = createAction('film/getFilmsByGenre');
