import { FilmSmallCard } from '../../components/film-small-card/film-small-card';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { AuthorizationStatus } from '../../types/enums';
import './my-list-page.scss';

interface MyListPageProps { }

export const MyListPage = (props: MyListPageProps) => {
  interface FilmInfo {
    filmName: string;
    filmSrc: string;
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
    }
  ];

  const filmsSmallCards = filmsInfo.map(({ filmName, filmSrc }, index) => (
    <FilmSmallCard
      key={index}
      filmName={filmName}
      filmImageSrc={filmSrc}
    />
  ));

  return (
    <div className="user-page">
      <Header authorizationStatus={AuthorizationStatus.Auth} headerClassName="user-page__head">
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {filmsSmallCards}
        </div>
      </section>

      <Footer />
    </div>
  );
};
