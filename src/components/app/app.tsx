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
}

export const App = ({films}: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={RoutePath.Main}>
        <Route index element={<MainPage films={films} promoFilmId={88} />} />
        <Route path={RoutePath.SignIn} element={<SignInPage />} />
        <Route path={RoutePath.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyListPage films={films} />
          </PrivateRoute>
        }
        />
        <Route path={RoutePath.Films}>
          <Route path={RoutePath.Film}>
            <Route index element={<FilmPage films={films} />} />
            <Route path={RoutePath.AddReview} element={<AddReviewPage films={films} />} />
          </Route>
        </Route>
        <Route path={RoutePath.Player}>
          <Route index path={RoutePath.Film} element={<PlayerPage films={films} />} />
        </Route>
        <Route path={RoutePath.NotFound} element={<NotFoundPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
