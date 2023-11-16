import './add-review-page.scss';
import { Header } from '../../components/header/header';
import { AuthorizationStatus, ReducerName, RoutePath } from '../../types/enums';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AddReviewForm } from '../../components/add-review-form/add-review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getFilmAction } from '../../store/api-actions';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { clearFilm, setFilmLoadingError } from '../../store/action';

export const AddReviewPage = () => {
  const params = useParams();
  const { id = '' } = params;
  const film = useAppSelector((state) => state[ReducerName.Films].film);
  const filmLoadingStatus = useAppSelector((state) => state[ReducerName.Films].filmLoadingStatus);
  const authorizationStatus = useAppSelector((state) => state[ReducerName.User].authorizationStatus);
  const filmLoadingError = useAppSelector((state) => state[ReducerName.Films].filmLoadingError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(`/${RoutePath.SignIn}`);
    }
    if (params.id) {
      dispatch(getFilmAction(params.id)).then(() => {
        if (filmLoadingError) {
          dispatch(setFilmLoadingError(''));
          navigate(`/${RoutePath.NotFound}`);
        }
      });
    }

    return (() => {
      dispatch(clearFilm());
      dispatch(setFilmLoadingError(''));
    });
  }, [params.id, dispatch, navigate, authorizationStatus, filmLoadingError]);

  if (!film || filmLoadingStatus) {
    return <LoadingScreen />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.posterImage} alt={`${film.name} poster`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/${RoutePath.Films}/${id}`}>{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/${RoutePath.Films}/${id}/${RoutePath.AddReview}`}>Add review</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} />
        </div>
      </div>

      <AddReviewForm filmId={id} />

    </section>
  );
};
