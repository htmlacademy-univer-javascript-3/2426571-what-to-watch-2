import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { AuthorizationStatus } from '../../types/enums';
import './main-page.scss';
import { IFilm } from '../../types/interfaces';
import { GenresCatalogue } from '../../components/genres-catalogue/genres-catalogue';
import { FilmsList } from '../../components/films-list/films-list';
import { genres } from '../../mocks/genres';

interface MainPageProps {
  films: IFilm[];
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmReleaseDate: number;
}

export const MainPage = ({ films, promoFilmName, promoFilmGenre, promoFilmReleaseDate }: MainPageProps) => (
  <div>
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header authorizationStatus={AuthorizationStatus.Auth} headerClassName="film-card__head" />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt={`${promoFilmName} poster`} />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilmName}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilmGenre}</span>
              <span className="film-card__year">{promoFilmReleaseDate}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
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
