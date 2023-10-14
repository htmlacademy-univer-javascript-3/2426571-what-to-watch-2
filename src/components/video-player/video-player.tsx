import { useEffect, useRef, useState } from 'react';
import { IFilm } from '../../types/interfaces';
import playIcon from '/img/icons/play-s.svg';
import pauseIcon from '/img/icons/pause.svg';
import fullscreenIcon from '/img/icons/full-screen.svg';
import mutedIcon from '/img/icons/muted.svg';
import unmutedIcon from '/img/icons/unmuted.svg';

interface VideoPlayerProps {
  film: IFilm;
}

export const VideoPlayer = ({film}: VideoPlayerProps) => {
  const [timeout, setModalTimeout] = useState<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => () => clearTimeout(timeout), []);

  useEffect(() => {
    if (videoRef.current && isMuted !== videoRef.current.muted) {
      setIsMuted(videoRef.current.muted);
    }
  }, [videoRef.current?.muted]);

  useEffect(() => {
    if (videoRef.current && videoRef.current?.paused !== !isPlaying) {
      setIsPlaying(!isPlaying);
    }
  }, [videoRef.current?.paused]);

  const handleMouseEnter = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    setModalTimeout(setTimeout(() => {
      videoRef.current?.play();
      setIsPlaying(true);
    }, 1000));
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

  const formatDuration = (duration: number): string => {
    if (!duration) {
      return '';
    }
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration - hours * 3600) / 60);
    const seconds = Math.floor(duration % 60);
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="player" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video
        ref={videoRef}
        src={film.imdbTrailer}
        className="player__video"
        poster={film.poster}
        muted={isMuted}
      >
      </video>
      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{videoRef.current ? formatDuration(videoRef.current?.duration) : ''}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <img onClick={handlePlayIconClick} src={isPlaying ? pauseIcon : playIcon} alt='Play/pause icon' />
          </button>
          <div className="player__name">{film.title}</div>

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
