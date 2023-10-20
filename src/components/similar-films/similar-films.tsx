import { IFilm } from '../../types/interfaces';
import { FilmsList } from '../films-list/films-list';

interface SimilarFilmsProps {
  film: IFilm;
  films: IFilm[];
}

export const SimilarFilms = ({film, films}: SimilarFilmsProps) => {
  var similarFilms: IFilm[] = [];
  const filmGenres = film.genres.split(', ');
  if (film.genres === '' || filmGenres.length === 0) {
    return null;
  }

  films.forEach((currentFilm) => {
    if (currentFilm.id !== film.id && filmGenres.filter((genre) => currentFilm.genres.includes(genre)).length > 0) {
      similarFilms.push(currentFilm);
    }
  });
  if (similarFilms.length === 0) {
    return null;
  } else if (similarFilms.length > 4) {
    similarFilms = similarFilms.slice(0, 4);
  }

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList films={similarFilms} />
    </section>
  );
}
