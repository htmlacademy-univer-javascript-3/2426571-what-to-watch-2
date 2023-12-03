import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FilmCard } from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { SimilarFilms } from '../../components/similar-films/similar-films';
import { Tabs } from '../../components/tabs/tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearFilm, setFilmComments, setFilmLoadingError, setSimilarFilms } from '../../store/action';
import { getFilmAction, getFilmCommentsAction, getSimilarFilmsAction } from '../../store/api-actions';
import { ReducerName, RoutePath } from '../../types/enums';
import './film-page.scss';

export const FilmPage = () => {
  const params = useParams();
  const film = useAppSelector((state) => state[ReducerName.Films].film);
  const similarFilms = useAppSelector((state) => state[ReducerName.Films].similarFilms);
  const comments = useAppSelector((state) => state[ReducerName.Comments].comments);
  const filmLoadingStatus = useAppSelector((state) => state[ReducerName.Films].filmLoadingStatus);
  const similarFilmsLoadingStatus = useAppSelector((state) => state[ReducerName.Films].similarFilmsLoadingStatus);
  const filmLoadingError = useAppSelector((state) => state[ReducerName.Films].filmLoadingError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      dispatch(getFilmAction(params.id)).then(() => {
        if (filmLoadingError) {
          dispatch(setFilmLoadingError(''));
          navigate(`/${RoutePath.NotFound}`);
        }
      });
      dispatch(getSimilarFilmsAction(params.id));
      dispatch(getFilmCommentsAction(params.id));
    }

    return (() => {
      dispatch(clearFilm());
      dispatch(setSimilarFilms([]));
      dispatch(setFilmComments([]));
      dispatch(setFilmLoadingError(''));
    });
  }, [params.id, dispatch, navigate, filmLoadingError]);

  if (!film || filmLoadingStatus || similarFilmsLoadingStatus) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.posterImage} alt={`${film.name} poster`} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header headerClassName="film-card__head" />

          <div className="film-card__wrap">
            <FilmCard film={film} addReviewButtonEnabled />
          </div>
        </div>

        <Tabs film={film} reviews={comments} />
      </section>

      <div className="page-content">
        <SimilarFilms films={similarFilms} />

        <Footer />
      </div>
    </div>
  );
};
