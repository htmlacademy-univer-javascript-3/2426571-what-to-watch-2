import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { VideoPlayer } from '../../components/video-player/video-player';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearFilm, setFilmLoadingError } from '../../store/action';
import { getFilmAction } from '../../store/api-actions';
import { ReducerName, RoutePath } from '../../types/enums';

export const PlayerPage = () => {
  const params = useParams();
  const film = useAppSelector((state) => state[ReducerName.Films].film);
  const filmLoadingStatus = useAppSelector((state) => state[ReducerName.Films].filmLoadingStatus);
  const filmLoadingError = useAppSelector((state) => state[ReducerName.Films].filmLoadingError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      dispatch(getFilmAction(params.id)).then(() => {
        if (filmLoadingError) {
          dispatch(setFilmLoadingError(''));
          navigate(`/${RoutePath.NotFound}`);
        }
      });
    }

    return (() => {
      dispatch(clearFilm());
      dispatch(setFilmLoadingError(''));
    });
  }, [params.id, dispatch, navigate, filmLoadingError]);

  if (!film || filmLoadingStatus) {
    return <LoadingScreen />;
  }

  return (
    <VideoPlayer.FullVideoPlayer film={film}/>
  );
};
