import { Navigate, useParams } from 'react-router-dom';
import { IFilm } from '../../types/interfaces';
import { RoutePath } from '../../types/enums';
import { VideoPlayer } from '../../components/video-player/video-player';

interface PlayerPageProps {
  films: IFilm[];
}

export const PlayerPage = ({films}: PlayerPageProps) => {
  const params = useParams();
  const id = params.id ?? '-1';

  const filteredFilms = films.filter((x) => x.id === id);
  if (filteredFilms.length === 0) {
    return <Navigate to={`/${RoutePath.NotFound}`} />;
  }

  const film = filteredFilms[0];

  return (
    <VideoPlayer film={film}/>
  );
};
