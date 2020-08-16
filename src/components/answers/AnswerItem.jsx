import React from 'react';
import { Row } from 'react-bootstrap';

const AnswerItem = ({
  item, onSelect, rightId, isRight, setSelectedItem,
}) => (
  <Row>
    <div className="form-group answer-audio">
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id={item.id}
          checked={item.selected}
          className={`custom-control-input ${rightId === item.id ? 'right' : 'wrong'}`}
          onChange={onSelect}
          onClick={(e) => {
            if (isRight) e.preventDefault();
            setSelectedItem(e.target.id);
          }}
        />
        <label className="custom-control-label" htmlFor={item.id}>{item.name}</label>
      </div>
    </div>
  </Row>
);

export default AnswerItem;
