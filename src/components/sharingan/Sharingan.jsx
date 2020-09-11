import React, { useState } from 'react';
import setBodyImage from '../../utils/setBodyImage';
import './sharingan.scss';

const Sharingan = () => {
  const [isLoading, setIsLoading] = useState(false);

  const changeBackgroundImage = () => {
    setIsLoading(true);
    setBodyImage().finally(() => setTimeout(() => setIsLoading(false), 500));
  };
  return (
    <div className={`circle circle-in ${isLoading ? 'circle-load' : ''}`} onClick={changeBackgroundImage}>
      <div className="curse curse-pos1" />
      <div className="curse curse-mid" />
      <div className="curse curse-pos3" />
    </div>
  );
};

export default Sharingan;
