import getImages from '../services/backgroundImage.service';

const setBodyImage = (src) => new Promise((resolve, reject) => {
  const body = document.querySelector('body');
  src = src || getImages();
  const img = new Image();
  img.src = src;
  img.onload = () => {
    if (src) {
      body.style.backgroundImage = `url(${src})`;
    }
    resolve();
  };
  img.onerror = (e) => reject(e);
});

export default setBodyImage;
