import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TopResult from './TopResult';
import CommonResult from './CommonResult';

const Result = ({
  score, reset, maxScore, audioWinner,
}) => {
  const isTop = score === maxScore;
  if (isTop) {
    audioWinner.play();
  }
  return (
    <Row className={`${isTop ? 'finish__container_absolute' : ''} finish__container justify-content-lg-center`}>
      {isTop ? <TopResult score={score} /> : <CommonResult score={score} />}
      <Col lg={11}><button type="button" className="btn btn-info reset-button" onClick={reset}>One more time!</button></Col>
    </Row>
  );
};

export default Result;
