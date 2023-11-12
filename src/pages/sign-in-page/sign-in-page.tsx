import { Navigate } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { SignInForm } from '../../components/sign-in-form/sign-in-form';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, ReducerName, RoutePath } from '../../types/enums';

export const SignInPage = () => {
  const authorizationStatus = useAppSelector((state) => state[ReducerName.Authorization].authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={RoutePath.Main} />;
  }

  return (
    <div className="user-page">
      <Header headerClassName="user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <SignInForm />

      <Footer />
    </div>
  );
};
