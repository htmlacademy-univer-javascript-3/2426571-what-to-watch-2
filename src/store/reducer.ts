import { createReducer } from '@reduxjs/toolkit';
import { getFilmsByGenre, setActiveGenre, setFilms, setFilmsLoadingStatus, setPromoFilm } from './action';
import { ALL_GENRES } from '../types/consts';
import { AuthorizationStatus } from '../types/enums';
import { IFilmPreview, IFilmPromo, IGenre } from '../types/interfaces';

interface InitialState {
  activeGenre: IGenre;
  currentFilms: IFilmPreview[];
  films: IFilmPreview[];
  promoFilm: IFilmPromo | null;
  authorizationStatus: AuthorizationStatus;
  filmsLoadingStatus: boolean;
}

const initialState: InitialState = {
  activeGenre: {id: 0, name: ALL_GENRES},
  currentFilms: [],
  films: [],
  promoFilm: null,
  authorizationStatus: AuthorizationStatus.Auth,
  filmsLoadingStatus: false
};

export const reducer = createReducer(initialState, (builder) => {
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
      const films = action.payload;
      state.films = films;
      state.currentFilms = state.films;
    })
    .addCase(setPromoFilm, (state, action) => {
      const promoFilm = action.payload;
      state.promoFilm = promoFilm;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      const filmsLoadingStatus = action.payload;
      state.filmsLoadingStatus = filmsLoadingStatus;
    });
});
