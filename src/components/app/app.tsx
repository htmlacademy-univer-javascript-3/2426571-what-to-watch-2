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
import { reviews } from '../../mocks/reviews';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../loading-screen/loading-screen';

export const App = () => {
  const authorizationStatus = useAppSelector((state) => state[ReducerName.Authorization].authorizationStatus);
  const filmsLoadingStatus = useAppSelector((state) => state[ReducerName.Films].filmsLoadingStatus);

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
              <Route index element={<FilmPage reviews={reviews} />} />
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
