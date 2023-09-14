import MainPage from '../../pages/main/main';
import { Genre } from '../../types/genre.enum';

type AppProps = {
  promoFilmName: string;
  promoFilmGenre: Genre;
  promoFilmReleaseDate: string;
}

function App({promoFilmName, promoFilmGenre, promoFilmReleaseDate}: AppProps): JSX.Element {
  return (
    <MainPage
      promoFilmName={promoFilmName}
      promoFilmGenre={promoFilmGenre}
      promoFilmReleaseDate={promoFilmReleaseDate}
    />
  );
}

export default App;
