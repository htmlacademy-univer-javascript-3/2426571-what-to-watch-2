import { MainPage } from '../../pages/main-page/main-page';

interface AppProps {
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmReleaseDate: number;
}

export const App = (props: AppProps) => (
  <MainPage
    {...props}
  />
);
