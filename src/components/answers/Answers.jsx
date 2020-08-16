import React from 'react';
import { Col } from 'react-bootstrap';
import AnswerItem from './AnswerItem';

const Answers = ({
  items, onSelect, rightId, isRight, setSelectedItem,
}) => (
  <Col lg={4}>
    {Array
      .from({ length: 6 }, (x, i) => i)
      .map((x, i) => (
        <AnswerItem
          item={items[x]}
          onSelect={onSelect}
          rightId={rightId}
          isRight={isRight}
          setSelectedItem={setSelectedItem}
          key={i}
        />
      ))}
  </Col>
);

export default Answers;
