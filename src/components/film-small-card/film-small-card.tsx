import { Link } from 'react-router-dom';
import { RoutePath } from '../../types/enums';
import './film-small-card.scss';
import { IFilmPreview } from '../../types/interfaces';

interface FilmSmallCardProps {
  film: IFilmPreview;
}

export const FilmSmallCard = ({film}: FilmSmallCardProps) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={film.previewImage} alt={`${film.name} poster`} />
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/${RoutePath.Films}/${film.id}`}>{film.name}</Link>
    </h3>
  </article>
);
