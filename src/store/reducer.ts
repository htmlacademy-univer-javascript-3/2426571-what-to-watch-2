import { createReducer } from '@reduxjs/toolkit';
import { getFilmsByGenre, setActiveGenre } from './action';
import { genres } from '../mocks/genres';
import { ALL_GENRES } from '../types/consts';
import { films } from '../mocks/films';

const initialState = {
  activeGenre: genres.filter((currentGenre) => currentGenre.name === ALL_GENRES)[0],
  films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      const {genre} = action.payload;
      state.activeGenre = genre;
    })
    .addCase(getFilmsByGenre, (state) => {
      if (state.activeGenre.name === ALL_GENRES) {
        state.films = films;
      } else {
        state.films = films.filter((film) => film.genres.includes(state.activeGenre.name));
      }
    });
});
