import { FilmsList } from '../../components/films-list/films-list';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { IFilm } from '../../types/interfaces';
import './my-list-page.scss';

interface MyListPageProps {
  films: IFilm[];
}

export const MyListPage = ({films}: MyListPageProps) => (
  <div className="user-page">
    <Header headerClassName="user-page__head">
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
    </Header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmsList films={films} />
    </section>

    <Footer />
  </div>
);
