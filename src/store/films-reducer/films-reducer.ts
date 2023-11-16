
import { createSlice } from '@reduxjs/toolkit';
import { ALL_GENRES } from '../../types/consts';
import { ReducerName } from '../../types/enums';
import { IFilmsReducer, IGenre } from '../../types/interfaces';
import { clearFilm, clearPromoFilm, getFilmsByGenre, setActiveGenre, setFilm, setFilmLoadingError, setFilmLoadingStatus, setFilms, setFilmsLoadingStatus, setGenres, setPromoFilm, setSimilarFilms, setSimilarFilmsLoadingStatus } from '../action';

const initialState: IFilmsReducer = {
  activeGenre: {id: 0, name: ALL_GENRES},
  currentFilms: [],
  films: [],
  genres: [],
  promoFilm: null,
  filmsLoadingStatus: false,
  filmLoadingStatus: false,
  similarFilmsLoadingStatus: false,
  filmLoadingError: '',
  film: null,
  similarFilms: [],
};

export const filmsReducer = createSlice({
  name: ReducerName.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setActiveGenre, (state, action) => {
        const {genre} = action.payload;
        state.activeGenre = genre;
      })
      .addCase(getFilmsByGenre, (state) => {
        if (state.activeGenre.name === ALL_GENRES) {
          state.currentFilms = state.films;
        } else {
          state.currentFilms = state.films.filter((film) => film.genre === state.activeGenre.name);
        }
      })
      .addCase(setFilms, (state, action) => {
        state.films = action.payload;
        state.currentFilms = action.payload;
      })
      .addCase(setSimilarFilms, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(setPromoFilm, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(clearPromoFilm, (state) => {
        state.promoFilm = null;
      })
      .addCase(setGenres, (state, action) => {
        if (state.genres.length === 0) {
          const films = action.payload;
          const genresNames: string[] = [];
          films.forEach((film) => {
            if (film.genre && film.genre !== '') {
              genresNames.push(film.genre);
            }
          });
          const genres: IGenre[] = [...new Set([ALL_GENRES, ...genresNames])].map<IGenre>((genre, index) => ({
            id: index,
            name: genre,
          }));
          state.genres = genres;
        }
      })
      .addCase(setFilmsLoadingStatus, (state, action) => {
        state.filmsLoadingStatus = action.payload;
      })
      .addCase(setFilmLoadingStatus, (state, action) => {
        state.filmLoadingStatus = action.payload;
      })
      .addCase(setSimilarFilmsLoadingStatus, (state, action) => {
        state.similarFilmsLoadingStatus = action.payload;
      })
      .addCase(setFilmLoadingError, (state, action) => {
        state.filmLoadingError = action.payload;
      })
      .addCase(setFilm, (state, action) => {
        state.film = action.payload;
      })
      .addCase(clearFilm, (state) => {
        state.film = null;
      });
  },
});
