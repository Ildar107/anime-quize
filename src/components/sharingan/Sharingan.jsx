import React, { useState } from 'react';
import getImages from '../../services/backgroundImage.service';
import './sharingan.scss';

const Sharingan = () => {
  const [isLoading, setIsLoading] = useState(false);

  const changeBackgroundImage = async () => {
    setIsLoading(true);
    const body = document.querySelector('body');
    const src = getImages();
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (src) {
        body.style.backgroundImage = `url(${src})`;
      }
      setTimeout(() => setIsLoading(false), 500);
    };
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
