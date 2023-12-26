import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../types/enums';
import { IFilm } from '../../types/interfaces';
import { formatDuration } from './utils';
import fullscreenIcon from '/img/icons/full-screen.svg';
import mutedIcon from '/img/icons/muted.svg';
import pauseIcon from '/img/icons/pause.svg';
import playIcon from '/img/icons/play-s.svg';
import unmutedIcon from '/img/icons/unmuted.svg';

const TIMEOUT_SEC = 1000;
const MAX_PROGRESS = 100;

interface VideoPlayerProps {
  film: IFilm;
}

export const FullVideoPlayer = ({film}: VideoPlayerProps) => {
  const [timeout, setModalTimeout] = useState<ReturnType<typeof setTimeout>>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [timeLeft, setTimeLeft] = useState(videoRef.current?.duration ?? 0);
  const [progress, setProgress] = useState(0);

  const updateTimeLeft = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    setTimeLeft(event.currentTarget.duration - event.currentTarget.currentTime);
    setProgress(event.currentTarget.currentTime / event.currentTarget.duration * 100);
  };

  useEffect(() => () => clearTimeout(timeout), [timeout]);

  useEffect(() => {
    if (videoRef.current && isMuted !== videoRef.current.muted) {
      setIsMuted(videoRef.current.muted);
    }
  }, [videoRef.current?.muted, isMuted]);

  useEffect(() => {
    if (videoRef.current?.paused === isPlaying) {
      setIsPlaying(!isPlaying);
    }
  }, [videoRef.current?.paused, isPlaying]);

  const handleMouseEnter = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    setModalTimeout(setTimeout(() => {
      videoRef.current?.play();
      setIsPlaying(true);
    }, TIMEOUT_SEC));
  };

  const handleMouseLeave = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
      setIsPlaying(false);
    }
  };

  const handlePlayIconClick = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteIconClick = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreenIconClick = () => {
    videoRef.current?.requestFullscreen();
  };

  return (
    <div className="player" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.posterImage}
        muted={isMuted}
        onTimeUpdate={(event) => updateTimeLeft(event)}
      >
      </video>
      <Link className="player__exit" to={`/${RoutePath.Films}/${film.id}`}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={MAX_PROGRESS}></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">-{formatDuration(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <img onClick={handlePlayIconClick} src={isPlaying ? pauseIcon : playIcon} alt='Play/pause icon' />
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__play">
            <img onClick={handleMuteIconClick} src={isMuted ? mutedIcon : unmutedIcon} alt='Mute/unmute icon' />
          </button>

          <button type="button" className="player__full-screen">
            <img onClick={handleFullscreenIconClick} src={fullscreenIcon} alt='Fullscreen icon' />
          </button>
        </div>
      </div>
    </div>
  );
};
