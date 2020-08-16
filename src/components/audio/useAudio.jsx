import * as React from 'react';

function useAudio(url, id) {
  const audioRef = React.useRef(null);

  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [playbackStatus, setPlaybackStatus] = React.useState('pause');
  const [isLoading, setLoading] = React.useState(true);
  const [isSeeking, setSeeking] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, [url]);

  return [
    <audio
      id={id}
      onLoadedData={() => {
        setPlaybackStatus('pause');
        setLoading(false);
        setDuration(audioRef.current.duration);
      }}
      onSeeking={() => setSeeking(true)}
      onSeeked={() => setSeeking(false)}
      onPause={() => setPlaybackStatus('pause')}
      onPlay={() => document.querySelectorAll('audio').forEach((item) => { if (item.id !== id) item.pause(); })}
      src={url}
      ref={audioRef}
      onTimeUpdate={() => {
        setCurrentTime(audioRef.current.currentTime);
      }}
      hidden
    />,
    {
      currentTime,
      duration,
      playbackStatus,
      isSeeking,
      isLoading,
      progress: (currentTime / duration) * 100,
      setTime: (seconds) => {
        audioRef.current.currentTime = seconds;
      },
      togglePlaybackStatus: () => {
        if (playbackStatus === 'play') {
          audioRef.current.pause();
          setPlaybackStatus('pause');
        }
        if (playbackStatus === 'pause') {
          audioRef.current.play();
          setPlaybackStatus('play');
        }
      },
    },
  ];
}

export default useAudio;
