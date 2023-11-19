import { useEffect } from 'react';
import { FilmCard } from '../../components/film-card/film-card';
import { FilmsList } from '../../components/films-list/films-list';
import { Footer } from '../../components/footer/footer';
import { GenresCatalogue } from '../../components/genres-catalogue/genres-catalogue';
import { Header } from '../../components/header/header';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearPromoFilm, setGenres } from '../../store/action';
import { getGenresAction, getPromoFilmAction } from '../../store/api-actions';
import { ReducerName } from '../../types/enums';
import './main-page.scss';

const FILMS_TO_SHOW_AMOUNT = 8;

export const MainPage = () => {
  const activeGenreFilms = useAppSelector((state) => state[ReducerName.Films].currentFilms);
  const promoFilm = useAppSelector((state) => state[ReducerName.Films].promoFilm);
  const genres = useAppSelector((state) => state[ReducerName.Films].genres);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPromoFilmAction());
    dispatch(getGenresAction());

    return (() => {
      dispatch(clearPromoFilm());
      dispatch(setGenres([]));
    });
  }, [dispatch]);

  if (!promoFilm) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header headerClassName="film-card__head" />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} />
            </div>

            <FilmCard film={promoFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresCatalogue genres={genres} />

          <FilmsList films={activeGenreFilms} amountToShow={FILMS_TO_SHOW_AMOUNT} />
        </section>

        <Footer />
      </div>
    </div>
  );
};
