import { Link } from 'react-router-dom';
import { RoutePath, AuthorizationStatus, ReducerName } from '../../types/enums';
import { Logo } from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

interface HeaderProps {
  headerClassName?: string;
  children?: JSX.Element;
}

export const Header = ({ headerClassName, children }: HeaderProps) => {
  const authorizationStatus = useAppSelector((state) => state[ReducerName.Authorization].authorizationStatus);
  const dispatch = useAppDispatch();

  const handleSignOutClick = () => {
    dispatch(logoutAction());
  }

  return (
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
            <Link className="user-block__link" onClick={handleSignOutClick} to={RoutePath.Main}>
              Sign out
            </Link>
          </li>
        </ul> :
        <div className="user-block">
          <Link className="user-block__link"to={`/${RoutePath.SignIn}`}>
            Sign in
          </Link>
        </div>}
    </header>
  );
}
