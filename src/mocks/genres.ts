import { ALL_GENRES } from '../types/consts';
import { IGenre } from '../types/interfaces';
import { films } from './films';

const genresNames: string[] = [];
films.forEach((film) => {
  if (film.genres && film.genres !== '') {
    genresNames.push(...film.genres.split(', '));
  }
});

export const genres: IGenre[] = [...new Set([ALL_GENRES, ...genresNames])].map((genre, index) => (
  <IGenre>{
    id: index,
    name: genre,
  }
));
