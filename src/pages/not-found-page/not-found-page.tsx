import { Link } from 'react-router-dom';
import { RoutePath } from '../../types/enums';
import './not-found-page.scss';

export const NotFoundPage = () => (
  <div className='not-found-page'>
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
    </header>
    <div className='not-found-page__content'>
      <h1>404. Страница не найдена</h1>
      <h3><Link to={RoutePath.Main}>Вернуться на главную страницу</Link></h3>
    </div>
    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
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
