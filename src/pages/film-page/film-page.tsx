import { Link, Navigate, useParams } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { AuthorizationStatus, RoutePath } from '../../types/enums';
import './film-page.scss';
import { IFilm, IReview } from '../../types/interfaces';
import { FilmsList } from '../../components/films-list/films-list';
import { Button } from '../../components/button/button';
import { Tabs } from '../../components/tabs/tabs';

interface FilmPageProps {
  films: IFilm[];
  reviews: IReview[];
}

export const FilmPage = ({films, reviews}: FilmPageProps) => {
  const params = useParams();
  const id = params.id ? Number(params.id) : -1;

  const filteredFilms = films.filter((x) => x.id === Number(id));
  if (filteredFilms.length === 0) {
    return <Navigate to={`/${RoutePath.NotFound}`} />;
  }

  const film = filteredFilms[0];

  const filteredReviews = reviews.filter((x) => x.filmId === Number(id));

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.poster} alt={`${film.title} poster`} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header authorizationStatus={AuthorizationStatus.Auth} headerClassName="film-card__head" />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genres}</span>
                <span className="film-card__year">{film.year}</span>
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
                <Link to={`/${RoutePath.Films}/${id}/${RoutePath.AddReview}`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Tabs film={film} reviews={filteredReviews} />
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films} />
        </section>

        <Footer />
      </div>
    </div>
  );
};
