import { Navigate } from 'react-router-dom';
import { RoutePath, AuthorizationStatus } from '../../types/enums';

interface PrivateRouteProps {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export const PrivateRoute = ({ authorizationStatus, children }: PrivateRouteProps) => (
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={RoutePath.Main + RoutePath.SignIn} />
);
