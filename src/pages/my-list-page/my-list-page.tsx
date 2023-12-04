import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilmsList } from '../../components/films-list/films-list';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFavorites } from '../../store/action';
import { getFavoritesAction } from '../../store/api-actions';
import { AuthorizationStatus, ReducerName, RoutePath } from '../../types/enums';
import './my-list-page.scss';

export const MyListPage = () => {
  const favorites = useAppSelector((state) => state[ReducerName.Favorites].favorites);
  const favoritesLoadingStatus = useAppSelector((state) => state[ReducerName.Favorites].favoritesLoadingStatus);
  const authorizationStatus = useAppSelector((state) => state[ReducerName.User].authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFavoritesAction());

    return (() => {
      dispatch(setFavorites([]));
    });
  }, [dispatch]);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    navigate(`/${RoutePath.SignIn}`);
  }

  if (favorites.length === 0 && favoritesLoadingStatus) {
    return <LoadingScreen />;
  }

  return (
    <div className="user-page">
      <Header headerClassName="user-page__head">
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favorites.length}</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favorites} />
      </section>

      <Footer />
    </div>
  );
};
