import { IFilmPreview } from '../../types/interfaces';
import { FilmsList } from '../films-list/films-list';

interface SimilarFilmsProps {
  films: IFilmPreview[];
}

export const SimilarFilms = ({films}: SimilarFilmsProps) => (
  <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <FilmsList films={films} />
  </section>
);
