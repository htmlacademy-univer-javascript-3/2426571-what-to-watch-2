import { FilmSmallCard } from '../film-small-card/film-small-card';
import { IFilm } from '../../types/interfaces';

interface FilmsListProps {
  films: IFilm[];
}

export const FilmsList = ({films}: FilmsListProps) => {
  const filmsSmallCards = films.map((film) => (
    <FilmSmallCard
      key={film.id}
      film={film}
    />
  ));

  return (
    <div className="catalog__films-list">
      {filmsSmallCards}
    </div>
  );
};
