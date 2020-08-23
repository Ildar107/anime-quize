import React from 'react';
import { Row } from 'react-bootstrap';
import AudioPlayer from '../audio/AudioPlayer';

const Question = ({ isRight, item }) => (
  <Row className="question">
    <div className="question__container">
      <img src={isRight ? item.img : './images/none-image.jpg'} className={isRight ? '' : 'secret__img'} alt="" />
      <div className="question__description">
        <h4>{isRight ? item.name : '******'}</h4>
        <AudioPlayer url={item.audio} id="question" />
      </div>
    </div>
  </Row>
);

export default Question;
