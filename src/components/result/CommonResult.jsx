import React from 'react';
import { Col } from 'react-bootstrap';

const CommonResult = ({ score }) => (
  <>
    <Col lg={4}><h2>Congratulations!</h2></Col>
    <Col lg={{ span: 10, offset: 1 }}>
      <h4>
        You completed the quiz and scored
        {' '}
        {score}
        {' '}
        out of 30 possible points
      </h4>
    </Col>
  </>
);

export default CommonResult;
