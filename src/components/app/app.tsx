import MainPage from '../../pages/main-page/main-page';
import { Genre } from '../../types/genre.enum';

type AppProps = {
  promoMovieName: string;
  promoMovieGenre: Genre;
  promoMovieReleaseDate: string;
}

function App({promoMovieName, promoMovieGenre, promoMovieReleaseDate}: AppProps): JSX.Element {
  return (
    <MainPage
      promoMovieName={promoMovieName}
      promoMovieGenre={promoMovieGenre}
      promoMovieReleaseDate={promoMovieReleaseDate}
    />
  );
}

export default App;
