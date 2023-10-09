import { Link } from 'react-router-dom';
import { AuthorizationStatus, RoutePath } from '../../types/enums';
import './not-found-page.scss';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

export const NotFoundPage = () => (
  <div className="not-found-page">
    <Header authorizationStatus={AuthorizationStatus.NoAuth} headerClassName="user-page__head" />
    <div className="not-found-page__content">
      <h1>Страница не найдена</h1>
      <h3><Link to={RoutePath.Main}>Вернуться на главную страницу</Link></h3>
    </div>
    <Footer />
  </div>
);
