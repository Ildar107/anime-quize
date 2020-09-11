import React from 'react';
import { Col } from 'react-bootstrap';
import AudioPlayer from '../audio/AudioPlayer';

const AnswerDescription = ({
  item,
}) => {
  if (!item) {
    return (
      <Col lg={8} className="answer__description answer__description_first ">
        <h4 className="text-info">Please start player and choose anime from list!</h4>
      </Col>
    );
  }
  return (
    <Col lg={8} className="answer__description">
      <div className="description__container">
        <div className="description__title">
          <h3>{item.name}</h3>
          <AudioPlayer url={item.audio} id="description" />
        </div>
        <div className="description__body">
          <img src={item.img} alt="" />
          <ul className="list-group list-group-flush">
            <li className="list-group-item" />
            <li className="list-group-item">
              Rating:
              {` ${item.Rating}`}
            </li>
            <li className="list-group-item">
              Year:
              {` ${item.Year}`}
            </li>
            <li className="list-group-item">
              Status:
              {` ${item.Status}`}
            </li>
            <li className="list-group-item decription">{item.Description}</li>
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default AnswerDescription;
