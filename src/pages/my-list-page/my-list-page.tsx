import './my-list-page.scss';

interface MyListPageProps { }

export const MyListPage = (props: MyListPageProps) => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__films-list">
        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/macbeth.jpg" alt="Macbeth" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Macbeth</a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/aviator.jpg" alt="Aviator" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Aviator</a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">We need to talk about Kevin</a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">What We Do in the Shadows</a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/revenant.jpg" alt="Revenant" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Revenant</a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/johnny-english.jpg" alt="Johnny English" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Johnny English</a>
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/shutter-island.jpg" alt="Shutter Island" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Shutter Island</a>
          </h3>
        </article>
      </div>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <a href="main.html" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);
