import { useEffect, useRef, useState } from 'react';
import { IFilmShort } from '../../types/interfaces';

const TIMEOUT_SEC = 1000;

interface VideoPlayerProps {
  film: IFilmShort;
}

export const PreviewVideoPlayer = ({film}: VideoPlayerProps) => {
  const [timeout, setModalTimeout] = useState<ReturnType<typeof setTimeout>>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => () => clearTimeout(timeout), [timeout]);

  const handleMouseEnter = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    setModalTimeout(setTimeout(() => {
      videoRef.current?.play();
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
    }
  };

  return (
    <div className="player__preview" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video
        ref={videoRef}
        src={film.previewVideoLink}
        className="player__video"
        poster={film.previewImage}
        muted
      >
      </video>
    </div>
  );
};
