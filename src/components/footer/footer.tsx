import { Link } from 'react-router-dom';
import { RoutePath } from '../../types/enums';

export const Footer = () => (
  <footer className="page-footer">
    <div className="logo">
      <Link className="logo__link logo__link--light" to={RoutePath.Main}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);
