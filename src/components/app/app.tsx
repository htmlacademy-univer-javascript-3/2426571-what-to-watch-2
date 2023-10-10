import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { RoutePath, AuthorizationStatus } from '../../types/enums';
import { PrivateRoute } from '../private-route/private-route';
import { MainPage } from '../../pages/main-page/main-page';
import { SignInPage } from '../../pages/sign-in-page/sign-in-page';
import { MyListPage } from '../../pages/my-list-page/my-list-page';
import { FilmPage } from '../../pages/film-page/film-page';
import { AddReviewPage } from '../../pages/add-review-page/add-review-page';
import { PlayerPage } from '../../pages/player-page/player-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { IFilm } from '../../types/interfaces';

interface AppProps {
  films: IFilm[];
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmReleaseDate: number;
}

export const App = (props: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={RoutePath.Main}>
        <Route index element={<MainPage {...props} />} />
        <Route path={RoutePath.SignIn} element={<SignInPage />} />
        <Route path={RoutePath.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyListPage />
          </PrivateRoute>
        }
        />
        <Route path={RoutePath.Films}>
          <Route path={RoutePath.Film} element={<FilmPage />} />
          <Route path={RoutePath.AddReview} element={<AddReviewPage />} />
        </Route>
        <Route path={RoutePath.Player} element={<PlayerPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
