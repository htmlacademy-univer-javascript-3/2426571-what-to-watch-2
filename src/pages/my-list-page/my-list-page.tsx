import { useEffect } from 'react';
import { FilmsList } from '../../components/films-list/films-list';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import './my-list-page.scss';
import { store } from '../../store';
import { getFavoritesAction } from '../../store/api-actions';
import { setFavorites } from '../../store/action';
import { ReducerName } from '../../types/enums';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';

export const MyListPage = () => {
  const favorites = useAppSelector((state) => state[ReducerName.Favorites].favorites);
  const favoritesLoadingStatus = useAppSelector((state) => state[ReducerName.Favorites].favoritesLoadingStatus);

  useEffect(() => {
    store.dispatch(getFavoritesAction());

    return () => {
      store.dispatch(setFavorites([]));
    };
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
}
