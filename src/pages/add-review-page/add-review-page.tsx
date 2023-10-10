import './add-review-page.scss';
import { Header } from '../../components/header/header';
import { AuthorizationStatus, RoutePath } from '../../types/enums';
import { Link, useParams } from 'react-router-dom';
import { IFilm } from '../../types/interfaces';
import { AddReviewForm } from '../../components/add-review-form/add-review-form';

interface AddReviewPageProps {
  films: IFilm[];
}

export const AddReviewPage = ({films}: AddReviewPageProps) => {
  const { id } = useParams();
  const film = films.filter(x => x.id === Number(id))[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.poster} alt={`${film.title} poster`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header authorizationStatus={AuthorizationStatus.Auth}>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/${RoutePath.Films}/${id}`}>{film.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/${RoutePath.Films}/${id}/${RoutePath.AddReview}`}>Add review</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.poster} alt={`${film.title} poster`} />
        </div>
      </div>

      <AddReviewForm filmId={Number(id)} />

    </section>
  );
};
