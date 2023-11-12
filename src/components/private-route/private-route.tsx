import { Navigate } from 'react-router-dom';
import { RoutePath, AuthorizationStatus, ReducerName } from '../../types/enums';
import { useAppSelector } from '../../hooks';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const authorizationStatus = useAppSelector((state) => state[ReducerName.Authorization].authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={RoutePath.Main + RoutePath.SignIn} />
  );
};
