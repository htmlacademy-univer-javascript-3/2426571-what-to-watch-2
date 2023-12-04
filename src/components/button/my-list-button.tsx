import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoritesAction, setFavoriteStatusAction } from '../../store/api-actions';
import { AuthorizationStatus, ReducerName, RoutePath } from '../../types/enums';
import { IFavoriteStatusSet } from '../../types/interfaces';

interface MyListButtonProps {
  filmId: string;
}

const MyListButtonComponent = ({filmId}: MyListButtonProps) => {
  const authorizationStatus = useAppSelector((state) => state[ReducerName.User].authorizationStatus);
  const favorites = useAppSelector((state) => state[ReducerName.Favorites].favorites);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isFavorite = favorites.filter((favorite) => favorite.id === filmId).length > 0;

  const handleMyListButtonClick = useCallback(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(`/${RoutePath.SignIn}`);
    }
    const favoriteStatusSet: IFavoriteStatusSet = {
      filmId: filmId,
      status: isFavorite ? 0 : 1,
    }
    dispatch(setFavoriteStatusAction(favoriteStatusSet)).then(() => dispatch(getFavoritesAction()));
  }, [authorizationStatus, dispatch, filmId, isFavorite, navigate]);

  return (
    <button onClick={handleMyListButtonClick} className="btn btn--list film-card__button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favorites.length}</span>
    </button> 
  )
};

export const MyListButton = memo(MyListButtonComponent);
