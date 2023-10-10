import { Link } from 'react-router-dom';
import { RoutePath } from '../../types/enums';
import './film-small-card.scss';
import { IFilm } from '../../types/interfaces';

interface FilmSmallCardProps {
  film: IFilm;
}

export const FilmSmallCard = ({film}: FilmSmallCardProps) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={film.poster} alt={`${film.title} poster`} />
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/${RoutePath.Films}/${film.id}`}>{film.title}</Link>
    </h3>
  </article>
);
