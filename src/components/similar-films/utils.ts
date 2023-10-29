import { IFilm } from '../../types/interfaces';
import { convertFilmGenresStringToStringArray } from '../../utils/utils';

export const similarFilms = (film: IFilm, films: IFilm[]): IFilm[] => {
  let currentSimilarFilms: IFilm[] = [];
  const filmGenres = convertFilmGenresStringToStringArray(film.genres);
  if (film.genres === '' || filmGenres.length === 0) {
    return [];
  }

  films.forEach((currentFilm) => {
    if (currentFilm.id !== film.id && filmGenres.filter((genre) => currentFilm.genres.includes(genre)).length > 0) {
      currentSimilarFilms.push(currentFilm);
    }
  });
  if (currentSimilarFilms.length === 0) {
    return [];
  } else if (currentSimilarFilms.length > 4) {
    currentSimilarFilms = currentSimilarFilms.slice(0, 4);
  }
  return currentSimilarFilms;
};
