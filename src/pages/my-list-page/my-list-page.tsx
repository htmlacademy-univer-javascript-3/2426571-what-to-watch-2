import { useEffect } from 'react';
import { FilmsList } from '../../components/films-list/films-list';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import './my-list-page.scss';
import { getFavoritesAction } from '../../store/api-actions';
import { ReducerName } from '../../types/enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { setFavorites } from '../../store/action';

export const MyListPage = () => {
  const favorites = useAppSelector((state) => state[ReducerName.Favorites].favorites);
  const favoritesLoadingStatus = useAppSelector((state) => state[ReducerName.Favorites].favoritesLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavoritesAction());

    return (() => {
      dispatch(setFavorites([]));
    });
  }, []);

  if (favorites.length === 0 && favoritesLoadingStatus) {
    return <LoadingScreen />;
  }

  return (
    <div className="user-page">
      <Header headerClassName="user-page__head">
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favorites} />
      </section>

      <Footer />
    </div>
  );
};
