import { Navigate, useParams } from 'react-router-dom';
import { ReducerName, RoutePath } from '../../types/enums';
import { VideoPlayer } from '../../components/video-player/video-player';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { useEffect } from 'react';
import { store } from '../../store';
import { getFilmAction } from '../../store/api-actions';
import { setFilm } from '../../store/action';

export const PlayerPage = () => {
  const params = useParams();
  const id = params.id ?? '-1';
  const film = useAppSelector((state) => state[ReducerName.Films].film);
  const films = useAppSelector((state) => state[ReducerName.Films].films);

  if (!films.find((currentFilm) => currentFilm.id === id)) {
    return <Navigate to={`/${RoutePath.NotFound}`} />;
  }

  useEffect(() => {
    if (!film) {
      store.dispatch(getFilmAction(id));
    }

    return () => {
      store.dispatch(setFilm(null));
    };
  }, []);

  if (!film) {
    return <LoadingScreen />;
  }

  return (
    <VideoPlayer film={film}/>
  );
};
