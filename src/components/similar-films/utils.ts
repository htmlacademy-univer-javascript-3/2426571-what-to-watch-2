import { IFilm } from '../../types/interfaces';
import { convertFilmGenresStringToStringArray } from '../../utils/utils';

export const similarFilms = (film: IFilm, films: IFilm[]): IFilm[] => {
  let similarFilms: IFilm[] = [];
  const filmGenres = convertFilmGenresStringToStringArray(film.genres);
  if (film.genres === '' || filmGenres.length === 0) {
    return [];
  }
  
  films.forEach((currentFilm) => {
    if (currentFilm.id !== film.id && filmGenres.filter((genre) => currentFilm.genres.includes(genre)).length > 0) {
      similarFilms.push(currentFilm);
    }
  });
  if (similarFilms.length === 0) {
    return [];
  } else if (similarFilms.length > 4) {
    similarFilms = similarFilms.slice(0, 4);
  }
  return similarFilms;
}
