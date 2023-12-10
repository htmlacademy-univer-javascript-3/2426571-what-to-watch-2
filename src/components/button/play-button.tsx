import { memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../types/enums';

interface PlayButtonProps {
  filmId: string;
}

const PlayButtonComponent = ({filmId}: PlayButtonProps) => (
  <Link to={`/${RoutePath.Player}/${filmId}`} className="btn btn--play film-card__button">
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </Link>
);

export const PlayButton = memo(PlayButtonComponent);
