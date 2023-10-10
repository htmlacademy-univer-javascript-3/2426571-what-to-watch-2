import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { AuthorizationStatus, RoutePath } from '../../types/enums';
import './main-page.scss';
import { IFilm } from '../../types/interfaces';
import { GenresCatalogue } from '../../components/genres-catalogue/genres-catalogue';
import { FilmsList } from '../../components/films-list/films-list';
import { genres } from '../../mocks/genres';
import { Link } from 'react-router-dom';

interface MainPageProps {
  films: IFilm[];
  promoFilmId: number;
}

export const MainPage = ({ films, promoFilmId }: MainPageProps) => {
  const promoFilm = films.filter(x => x.id === Number(promoFilmId))[0];

  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.poster} alt={`${promoFilm.title} poster`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header authorizationStatus={AuthorizationStatus.Auth} headerClassName="film-card__head" />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.poster} alt={`${promoFilm.title} poster`} />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genres}</span>
                <span className="film-card__year">{promoFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/${RoutePath.Player}/${promoFilmId}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={`/${RoutePath.MyList}`} className="btn btn--list film-card__button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresCatalogue genres={genres} />

          <FilmsList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
