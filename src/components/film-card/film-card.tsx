import { memo } from 'react';
import { IFilm, IFilmPromo } from '../../types/interfaces';
import { Buttons } from '../button/buttons';

interface FilmCardProps {
  film: IFilmPromo | IFilm;
  addReviewButtonEnabled?: boolean;
}

const FilmCardComponent = ({film, addReviewButtonEnabled}: FilmCardProps) => (
  <div className="film-card__desc">
    <h2 className="film-card__title">{film.name}</h2>
    <p className="film-card__meta">
      <span className="film-card__genre">{film.genre}</span>
      <span className="film-card__year">{film.released}</span>
    </p>

    <div className="film-card__buttons">
      <Buttons.PlayButton filmId={film.id} />
      <Buttons.MyListButton filmId={film.id} />
      {addReviewButtonEnabled ?
        <Buttons.AddReviewButton filmId={film.id} /> :
        null}
    </div>
  </div>
);

export const FilmCard = memo(FilmCardComponent);
