// import apiUrls from '../constants/apiUrls';
import getRandomInt from '../utils/randomInt';

const imageCount = 12;

function getImages(number) {
  const randomImg = number || getRandomInt(imageCount);
  return `https://raw.githubusercontent.com/Ildar107/anime-image-data/master/background/${randomImg === 0 ? randomImg + 1 : randomImg}.jpg`;
}

export default getImages;
