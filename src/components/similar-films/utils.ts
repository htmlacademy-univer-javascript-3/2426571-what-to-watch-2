import { IFilm } from '../../types/interfaces';

export const similarFilms = (film: IFilm, films: IFilm[]): IFilm[] => {
  let currentSimilarFilms: IFilm[] = [];
  if (film.genre === '') {
    return [];
  }

  films.forEach((currentFilm) => {
    if (currentFilm.id !== film.id && film.genre === currentFilm.genre) {
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
