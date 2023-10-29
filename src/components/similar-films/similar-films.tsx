import { IFilm } from '../../types/interfaces';
import { FilmsList } from '../films-list/films-list';
import { similarFilms } from './utils';

interface SimilarFilmsProps {
  film: IFilm;
  films: IFilm[];
}

export const SimilarFilms = ({film, films}: SimilarFilmsProps) => (
  <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <FilmsList films={similarFilms(film, films)} />
  </section>
);
