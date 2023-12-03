import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, ReducerName, RoutePath } from '../../types/enums';
import { IFilm, IFilmPromo } from '../../types/interfaces';
import { Button } from '../button/button';

interface FilmCardProps {
  film: IFilmPromo | IFilm;
  addReviewButtonEnabled?: boolean;
}

const FilmCardComponent = ({film, addReviewButtonEnabled}: FilmCardProps) => {
  const authorizationStatus = useAppSelector((state) => state[ReducerName.User].authorizationStatus);

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>

      <div className="film-card__buttons">
        <Button
          buttonClassName="btn--play"
          buttonLink={`/${RoutePath.Player}/${film.id}`}
          svgHref="#play-s"
        >
          <span>Play</span>
        </Button>
        <Button
          buttonClassName="btn--list"
          buttonLink={`/${RoutePath.MyList}`}
          svgHref="#add"
        >
          <>
            <span>My list</span>
            <span className="film-card__count">9</span>
          </>
        </Button>
        {addReviewButtonEnabled && authorizationStatus === AuthorizationStatus.Auth ?
          <Link to={`/${RoutePath.Films}/${film.id}/${RoutePath.AddReview}`} className="btn film-card__button">
            Add review
          </Link> :
          null}
      </div>
    </div>
  );
};

export const FilmCard = memo(FilmCardComponent);
