import { FilmSmallCard } from '../film-small-card/film-small-card';
import { IFilmShort } from '../../types/interfaces';
import { ShowMoreButton } from '../show-more-button/show-more-button';
import { useState } from 'react';

interface FilmsListProps {
  films: IFilmShort[];
  amountToShow?: number;
}

export const FilmsList = ({films, amountToShow}: FilmsListProps) => {
  const [shownFilmsAmount, setShownFilmsAmount] = useState(amountToShow ?? -1);

  const handleShowMoreButtonClick = () => {
    if (amountToShow) {
      setShownFilmsAmount(shownFilmsAmount + amountToShow);
    }
  };

  const filmsSmallCards = films.map((film) => (
    <FilmSmallCard
      key={film.id}
      film={film}
    />
  ));

  return (
    <>
      <div className="catalog__films-list">
        {filmsSmallCards.slice(0, amountToShow ?? filmsSmallCards.length)}
      </div>

      {amountToShow ?
        <ShowMoreButton
          isVisible={shownFilmsAmount < films.length}
          handleShowMoreButtonClick={handleShowMoreButtonClick}
        />
        : null}
    </>
  );
};
