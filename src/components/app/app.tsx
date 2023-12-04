import { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AddReviewPage } from '../../pages/add-review-page/add-review-page';
import { FilmPage } from '../../pages/film-page/film-page';
import { MainPage } from '../../pages/main-page/main-page';
import { MyListPage } from '../../pages/my-list-page/my-list-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PlayerPage } from '../../pages/player-page/player-page';
import { SignInPage } from '../../pages/sign-in-page/sign-in-page';
import { setAuthorizationStatus, setFilms } from '../../store/action';
import { getAuthorizationStatusAction, getFilmsAction } from '../../store/api-actions';
import { AuthorizationStatus, ReducerName, RoutePath } from '../../types/enums';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { PrivateRoute } from '../private-route/private-route';

export const App = () => {
  const filmsLoadingStatus = useAppSelector((state) => state[ReducerName.Films].filmsLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFilmsAction());
    dispatch(getAuthorizationStatusAction());

    return (() => {
      dispatch(setFilms([]));
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    });
  }, [dispatch]);

  if (filmsLoadingStatus) {
    return <LoadingScreen />;
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
              <Route path={RoutePath.AddReview} element={
                <PrivateRoute>
                  <AddReviewPage />
                </PrivateRoute>
              }
              />
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
