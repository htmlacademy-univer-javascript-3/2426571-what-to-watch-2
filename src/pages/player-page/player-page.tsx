import { useNavigate, useParams } from 'react-router-dom';
import { ReducerName, RoutePath } from '../../types/enums';
import { VideoPlayer } from '../../components/video-player/video-player';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { useEffect } from 'react';
import { getFilmAction } from '../../store/api-actions';
import { clearFilm } from '../../store/action';

export const PlayerPage = () => {
  const params = useParams();
  const id = params.id ?? '-1';
  const film = useAppSelector((state) => state[ReducerName.Films].film);
  const films = useAppSelector((state) => state[ReducerName.Films].films);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!films.find((currentFilm) => currentFilm.id === id)) {
      navigate(`/${RoutePath.NotFound}`);
    }
    if (!film) {
      dispatch(getFilmAction(id));
    }

    return (() => {
      dispatch(clearFilm());
    });
  }, []);

  if (!film) {
    return <LoadingScreen />;
  }

  return (
    <VideoPlayer film={film}/>
  );
};
