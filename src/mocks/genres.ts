import { ALL_GENRES } from '../types/consts';
import { IGenre } from '../types/interfaces';
import { convertFilmGenresStringToStringArray } from '../utils/utils';
import { films } from './films';

const genresNames: string[] = [];
films.forEach((film) => {
  if (film.genres && film.genres !== '') {
    genresNames.push(...convertFilmGenresStringToStringArray(film.genres));
  }
});

export const genres: IGenre[] = [...new Set([ALL_GENRES, ...genresNames])].map((genre, index) => (
  <IGenre>{
    id: index,
    name: genre,
  }
));
