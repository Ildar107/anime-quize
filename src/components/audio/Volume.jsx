import React, { useState } from 'react';

const Volume = ({ value, setVolume, setMuted }) => {
  const [isShowVolume, setIsShowVolume] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volumeValue, setVolumeValue] = useState(value);

  const showVolume = () => {
    setIsShowVolume(true);
  };

  const hideVolume = () => {
    setIsShowVolume(false);
  };

  const handleChange = ({ target }) => {
    setVolumeValue(target.value);
    setVolume(target.value);
    setIsMuted(false);
    setMuted(false);
  };

  const handleClick = () => {
    setMuted(!isMuted);
    setIsMuted(!isMuted);
    if (!isMuted) {
      setVolumeValue(0);
    } else {
      setVolumeValue(value);
    }
  };

  return (
    <div className="volume" onMouseEnter={showVolume} onMouseLeave={hideVolume}>
      <div className={`volume__tooltip ${isShowVolume ? 'volume__tooltip_visible' : ''}`}>
        <input type="range" value={volumeValue} onChange={handleChange} />
      </div>
      <i
        className={isMuted ? 'uil-volume-mute' : 'uil-volume'}
        onClick={handleClick}
      />
    </div>
  );
};

export default Volume;
