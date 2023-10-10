import { useState } from 'react';
import { IFilm } from '../../types/interfaces';
import { FilmSmallCard } from '../film-small-card/film-small-card';

interface FilmsListProps {
  films: IFilm[];
}

export const FilmsList = ({films}: FilmsListProps) => {
  const [activeFilmCardId, setActiveFilmCardId] = useState<number>(-1);

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
