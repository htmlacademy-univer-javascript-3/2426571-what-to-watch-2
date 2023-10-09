import { Link } from 'react-router-dom';
import { FilmSmallCard } from '../../components/film-small-card/film-small-card';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { AuthorizationStatus } from '../../types/enums';
import './main-page.scss';

interface MainPageProps {
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmReleaseDate: number;
}

export const MainPage = ({ promoFilmName, promoFilmGenre, promoFilmReleaseDate }: MainPageProps) => {
  interface FilmInfo {
    filmName: string;
    filmSrc: string;
  }

  interface GenreInfo {
    genreName: string;
    isActive?: boolean;
  }

  const filmsInfo: FilmInfo[] = [
    {
      filmSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
      filmName: 'Fantastic Beasts: The Crimes of Grindelwald',
    },
    {
      filmSrc: 'img/bohemian-rhapsody.jpg',
      filmName: 'Bohemian Rhapsody',
    },
    {
      filmSrc: 'img/macbeth.jpg',
      filmName: 'Macbeth',
    },
    {
      filmSrc: 'img/aviator.jpg',
      filmName: 'Aviator',
    },
    {
      filmSrc: 'img/we-need-to-talk-about-kevin.jpg',
      filmName: 'We need to talk about Kevin',
    },
    {
      filmSrc: 'img/what-we-do-in-the-shadows.jpg',
      filmName: 'What We Do in the Shadows',
    },
    {
      filmSrc: 'img/revenant.jpg',
      filmName: 'Revenant',
    },
    {
      filmSrc: 'img/johnny-english.jpg',
      filmName: 'Johnny English',
    },
    {
      filmSrc: 'img/shutter-island.jpg',
      filmName: 'Shutter Island',
    },
    {
      filmSrc: 'img/pulp-fiction.jpg',
      filmName: 'Pulp Fiction',
    },
    {
      filmSrc: 'img/no-country-for-old-men.jpg',
      filmName: 'No Country for Old Men',
    },
    {
      filmSrc: 'img/snatch.jpg',
      filmName: 'Snatch',
    },
    {
      filmSrc: 'img/moonrise-kingdom.jpg',
      filmName: 'Moonrise Kingdom',
    },
    {
      filmSrc: 'img/seven-years-in-tibet.jpg',
      filmName: 'Seven Years in Tibet',
    },
    {
      filmSrc: 'img/midnight-special.jpg',
      filmName: 'Midnight Special',
    },
    {
      filmSrc: 'img/war-of-the-worlds.jpg',
      filmName: 'War of the Worlds',
    },
    {
      filmSrc: 'img/dardjeeling-limited.jpg',
      filmName: 'Dardjeeling Limited',
    },
    {
      filmSrc: 'img/orlando.jpg',
      filmName: 'Orlando',
    },
    {
      filmSrc: 'img/mindhunter.jpg',
      filmName: 'Mindhunter',
    },
    {
      filmSrc: 'img/midnight-special.jpg',
      filmName: 'Midnight Special'
    }
  ];

  const genresCatalogue: GenreInfo[] = [
    {
      genreName: 'All genres',
      isActive: true
    },
    {
      genreName: 'Comedies',
    },
    {
      genreName: 'Crime',
    },
    {
      genreName: 'Documentary',
    },
    {
      genreName: 'Horror',
    },
    {
      genreName: 'Kids & Family',
    },
    {
      genreName: 'Romance',
    },
    {
      genreName: 'Sci-Fi',
    },
    {
      genreName: 'Thrillers',
    },
  ];

  const filmsSmallCards = filmsInfo.map(({ filmName, filmSrc }, index) => (
    <FilmSmallCard
      key={index}
      filmName={filmName}
      filmImageSrc={filmSrc}
    />
  ));

  const genresCatalogueItems = genresCatalogue.map(({ genreName, isActive}, index) => {
    const genreClassName = isActive === undefined ? 'catalog__genres-item' : 'catalog__genres-item catalog__genres-item--active';

    return (
      <li className={genreClassName} key={index}>
        <Link to='#' className="catalog__genres-link">{genreName}</Link>
      </li>
    );
  });

  return (
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

          <ul className="catalog__genres-list">
            {genresCatalogueItems}
          </ul>

          <div className="catalog__films-list">
            {filmsSmallCards}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};
