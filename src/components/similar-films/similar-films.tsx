import { IFilmShort } from '../../types/interfaces';
import { FilmsList } from '../films-list/films-list';

interface SimilarFilmsProps {
  films: IFilmShort[];
}

export const SimilarFilms = ({films}: SimilarFilmsProps) => (
  <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <FilmsList films={films} />
  </section>
);
