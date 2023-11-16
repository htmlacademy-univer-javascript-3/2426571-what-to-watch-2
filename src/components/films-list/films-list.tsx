import { useState } from 'react';
import { IFilmShort } from '../../types/interfaces';
import { FilmSmallCard } from '../film-small-card/film-small-card';
import { ShowMoreButton } from '../show-more-button/show-more-button';

interface FilmsListProps {
  films: IFilmShort[];
  amountToShow?: number;
}

export const FilmsList = ({films, amountToShow}: FilmsListProps) => {
  const [shownFilmsAmount, setShownFilmsAmount] = useState(amountToShow ?? films.length);

  const handleShowMoreButtonClick = () => {
    if (amountToShow) {
      const newAmountToShow = shownFilmsAmount + amountToShow < films.length ? shownFilmsAmount + amountToShow : films.length;
      setShownFilmsAmount(newAmountToShow);
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
        {filmsSmallCards.slice(0, shownFilmsAmount)}
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
