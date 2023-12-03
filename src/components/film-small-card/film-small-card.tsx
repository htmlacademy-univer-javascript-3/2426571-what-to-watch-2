import { memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../types/enums';
import { IFilmShort } from '../../types/interfaces';
import './film-small-card.scss';

interface FilmSmallCardProps {
  film: IFilmShort;
}

const FilmSmallCardComponent = ({film}: FilmSmallCardProps) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={film.previewImage} alt={`${film.name} poster`} />
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/${RoutePath.Films}/${film.id}`}>{film.name}</Link>
    </h3>
  </article>
);

export const FilmSmallCard = memo(FilmSmallCardComponent);
