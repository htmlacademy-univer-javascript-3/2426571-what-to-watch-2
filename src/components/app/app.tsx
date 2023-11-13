import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { RoutePath, AuthorizationStatus, ReducerName } from '../../types/enums';
import { PrivateRoute } from '../private-route/private-route';
import { MainPage } from '../../pages/main-page/main-page';
import { SignInPage } from '../../pages/sign-in-page/sign-in-page';
import { MyListPage } from '../../pages/my-list-page/my-list-page';
import { FilmPage } from '../../pages/film-page/film-page';
import { AddReviewPage } from '../../pages/add-review-page/add-review-page';
import { PlayerPage } from '../../pages/player-page/player-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { useEffect } from 'react';
import { getAuthorizationStatusAction, getFilmsAction } from '../../store/api-actions';
import { setAuthorizationStatus, setFilms } from '../../store/action';

export const App = () => {
  const authorizationStatus = useAppSelector((state) => state[ReducerName.User].authorizationStatus);
  const filmsLoadingStatus = useAppSelector((state) => state[ReducerName.Films].filmsLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFilmsAction());
    dispatch(getAuthorizationStatusAction());

    return (() => {
      dispatch(setFilms([]));
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    });
  }, []);

  if (authorizationStatus === AuthorizationStatus.Unknown || filmsLoadingStatus) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.Main}>
          <Route index element={<MainPage />} />
          <Route path={RoutePath.SignIn} element={<SignInPage />} />
          <Route path={RoutePath.MyList} element={
            <PrivateRoute>
              <MyListPage />
            </PrivateRoute>
          }
          />
          <Route path={RoutePath.Films}>
            <Route path={RoutePath.Film}>
              <Route index element={<FilmPage />} />
              <Route path={RoutePath.AddReview} element={<AddReviewPage />} />
            </Route>
          </Route>
          <Route path={RoutePath.Player}>
            <Route index path={RoutePath.Film} element={<PlayerPage />} />
          </Route>
          <Route path={RoutePath.NotFound} element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
