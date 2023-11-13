import './add-review-page.scss';
import { Header } from '../../components/header/header';
import { ReducerName, RoutePath } from '../../types/enums';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AddReviewForm } from '../../components/add-review-form/add-review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getFilmAction } from '../../store/api-actions';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';

export const AddReviewPage = () => {
  const params = useParams();
  const id = params.id ?? '-1';
  const film = useAppSelector((state) => state[ReducerName.Films].film);
  const films = useAppSelector((state) => state[ReducerName.Films].films);
  const dispatch = useAppDispatch();

  if (!films.find((currentFilm) => currentFilm.id === id)) {
    return <Navigate to={`/${RoutePath.NotFound}`} />;
  }

  useEffect(() => {
    if (!film) {
      dispatch(getFilmAction(id));
    }
  }, []);

  if (!film) {
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
