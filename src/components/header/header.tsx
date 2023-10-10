import { Link } from 'react-router-dom';
import { RoutePath, AuthorizationStatus } from '../../types/enums';
import { Logo } from '../logo/logo';

interface HeaderProps {
  authorizationStatus: AuthorizationStatus;
  headerClassName?: string;
  children?: JSX.Element;
}

export const Header = ({ authorizationStatus, headerClassName, children }: HeaderProps) => (
  <header className={`page-header ${headerClassName ?? ''}`}>
    <Logo />
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
