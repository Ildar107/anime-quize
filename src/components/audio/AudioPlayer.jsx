import * as React from 'react';
import './audio.scss';
import useAudio from './useAudio';
import TimeBar from './TimeBar';
import PlaybackButton from './PlaybackButton';

const AudioPlayer = ({ url, id }) => {
  const [audioElement, audioProps] = useAudio(url, id);

  return (
    <div className="audio-player">
      {audioElement}

      {audioProps.isLoading ? (
        <div style={{ color: 'white' }}>Loading...</div>
      ) : (
        <div className="controls">
          <PlaybackButton
            onClick={audioProps.togglePlaybackStatus}
            playbackStatus={audioProps.playbackStatus}
          />
          <TimeBar
            currentTime={audioProps.currentTime}
            isSeeking={audioProps.isSeeking}
            duration={audioProps.duration}
            progress={audioProps.progress}
            setTime={audioProps.setTime}
          />
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
