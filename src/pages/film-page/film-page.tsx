import { Link, useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { AuthorizationStatus, ReducerName, RoutePath } from '../../types/enums';
import './film-page.scss';
import { Button } from '../../components/button/button';
import { Tabs } from '../../components/tabs/tabs';
import { SimilarFilms } from '../../components/similar-films/similar-films';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmAction, getFilmCommentsAction, getSimilarFilmsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';

export const FilmPage = () => {
  const params = useParams();
  const id = params.id ?? '-1';
  const film = useAppSelector((state) => state[ReducerName.Films].film);
  const films = useAppSelector((state) => state[ReducerName.Films].films);
  const similarFilms = useAppSelector((state) => state[ReducerName.Films].similarFilms);
  const comments = useAppSelector((state) => state[ReducerName.Comments].comments);
  const authorizationStatus = useAppSelector((state) => state[ReducerName.User].authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!films.find((currentFilm) => currentFilm.id === id)) {
      navigate(`/${RoutePath.NotFound}`);
    }
    dispatch(getFilmAction(id));
    dispatch(getSimilarFilmsAction(id));
    dispatch(getFilmCommentsAction(id));
  }, []);

  if (!film) {
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
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Button
                  buttonClassName="btn--play"
                  buttonLink={`/${RoutePath.Player}/${id}`}
                  svgHref="#play-s"
                >
                  <span>Play</span>
                </Button>
                <Button
                  buttonClassName="btn--list"
                  buttonLink={`/${RoutePath.MyList}`}
                  svgHref="#add"
                >
                  <>
                    <span>My list</span>
                    <span className="film-card__count">9</span>
                  </>
                </Button>
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <Link to={`/${RoutePath.Films}/${id}/${RoutePath.AddReview}`} className="btn film-card__button">
                    Add review
                  </Link> :
                  null}
              </div>
            </div>
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
