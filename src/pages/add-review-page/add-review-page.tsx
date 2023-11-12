import './add-review-page.scss';
import { Header } from '../../components/header/header';
import { ReducerName, RoutePath } from '../../types/enums';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AddReviewForm } from '../../components/add-review-form/add-review-form';
import { useAppSelector } from '../../hooks';

export const AddReviewPage = () => {
  const films = useAppSelector((state) => state[ReducerName.Films].films);
  const params = useParams();
  const id = params.id ?? '-1';

  const filteredFilms = films.filter((x) => x.id === id);
  if (filteredFilms.length === 0) {
    return <Navigate to={`/${RoutePath.NotFound}`} />;
  }

  const film = filteredFilms[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.previewImage} alt={`${film.name} poster`} />
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
          <img src={film.previewImage} alt={`${film.name} poster`} />
        </div>
      </div>

      <AddReviewForm filmId={id} />

    </section>
  );
};
