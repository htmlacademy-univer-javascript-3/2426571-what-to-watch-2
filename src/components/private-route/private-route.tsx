import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, ReducerName, RoutePath } from '../../types/enums';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const authorizationStatus = useAppSelector((state) => state[ReducerName.User].authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={RoutePath.Main + RoutePath.SignIn} />
  );
};
