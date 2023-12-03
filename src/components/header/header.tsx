import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AuthorizationStatus, ReducerName, RoutePath } from '../../types/enums';
import { Logo } from '../logo/logo';

interface HeaderProps {
  headerClassName?: string;
  children?: JSX.Element;
}

const HeaderComponent = ({ headerClassName, children }: HeaderProps) => {
  const authorizationStatus = useAppSelector((state) => state[ReducerName.User].authorizationStatus);
  const dispatch = useAppDispatch();

  const handleSignOutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <header className={`page-header ${headerClassName ?? ''}`}>
      <Logo />
      {children}
      {authorizationStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">∏
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
};

export const Header = memo(HeaderComponent);
