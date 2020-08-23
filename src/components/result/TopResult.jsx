import React from 'react';
import { Col } from 'react-bootstrap';

const TopResult = ({ score }) => (
  <>
    <Col lg={6}><img src="./images/winner.gif" alt="" /></Col>
    <Col lg={{ span: 10, offset: 1 }}>
      <h3 className="text-danger">
        You are the absolute winner of the anime quiz! Scored
        {' '}
        {score}
        {' '}
        out of 30!
      </h3>
    </Col>
  </>
);

export default TopResult;
