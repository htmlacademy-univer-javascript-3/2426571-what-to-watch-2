import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { SignInForm } from '../../components/sign-in-form/sign-in-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setAuthorizationErrors } from '../../store/action';
import { AuthorizationStatus, ReducerName, RoutePath } from '../../types/enums';
import { useEffect } from 'react';

export const SignInPage = () => {
  const authorizationStatus = useAppSelector((state) => state[ReducerName.User].authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(setAuthorizationErrors([]));
      navigate(RoutePath.Main);
    }
  }, [dispatch, navigate, authorizationStatus]);

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
