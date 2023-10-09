import { Link } from 'react-router-dom';
import { RoutePath, AuthorizationStatus } from '../../types/enums';

interface HeaderProps {
  authorizationStatus: AuthorizationStatus;
  headerClassName?: string;
  children?: JSX.Element;
}

export const Header = ({ authorizationStatus, headerClassName, children }: HeaderProps) => {
  const currentHeaderClassName = headerClassName === undefined ? 'page-header' : `page-header ${headerClassName}`;

  return (
    <header className={currentHeaderClassName}>
      <div className="logo">
        <Link className="logo__link" to={RoutePath.Main}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      {authorizationStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={RoutePath.Main}>
              Sign out
            </Link>
          </li>
        </ul>
        : null}
    </header>
  );
};
