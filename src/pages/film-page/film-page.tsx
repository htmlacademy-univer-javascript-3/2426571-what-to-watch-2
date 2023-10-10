import { Link, Navigate, useParams } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { AuthorizationStatus, RoutePath } from '../../types/enums';
import './film-page.scss';
import { IFilm } from '../../types/interfaces';
import { FilmsList } from '../../components/films-list/films-list';
import { Button } from '../../components/button/button';

interface FilmPageProps {
  films: IFilm[];
}

export const FilmPage = ({films}: FilmPageProps) => {
  const params = useParams();
  const id = params.id ? Number(params.id) : -1;

  const filteredFilms = films.filter((x) => x.id === Number(id));
  if (filteredFilms.length === 0) {
    return <Navigate to={`/${RoutePath.NotFound}`} />;
  }

  const film = filteredFilms[0];

  interface NavInfo {
    navName: string;
    isActive?: boolean;
  }

  const navsInfo: NavInfo[] = [
    {
      navName: 'Overview',
      isActive: true
    },
    {
      navName: 'Details',
    },
    {
      navName: 'Reviews',
    },
  ];

  const navigationItems = navsInfo.map(({ navName, isActive}, index) => {
    const navClassName = isActive === undefined ? 'film-nav__item' : 'film-nav__item film-nav__item--active';

    return (
      <li className={navClassName} key={index}>
        <Link to='#' className="film-nav__link">{navName}</Link>
      </li>
    );
  });

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

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.poster} alt={`${film.title} poster`} />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {navigationItems}
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film.summary}</p>

                <p className="film-card__director"><strong>Director: {film.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {film.cast}</strong></p>
              </div>
            </div>
          </div>
        </div>
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
