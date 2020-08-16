import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Header = ({ score, round }) => (
  <>
    <Row>
      <Col lg={10}>
        <h2 className="title"> Anime Quiz </h2>
      </Col>
      <Col lg={2}>
        <span>
          score:
          {score}
        </span>
      </Col>
    </Row>
    <Row lg={12}>
      <div className="btn-group btn-group-toggle questions" data-toggle="buttons">
        <label className={`btn btn-info ${round === 0 ? 'active' : 'disabled'}`}>
          <input type="checkbox" />
          {' '}
          warm-up
        </label>
        <label className={`btn btn-info ${round === 1 ? 'active' : 'disabled'}`}>
          <input type="checkbox" />
          {' '}
          Action
        </label>
        <label className={`btn btn-info ${round === 2 ? 'active' : 'disabled'}`}>
          <input type="checkbox" />
          {' '}
          Adventure
        </label>
        <label className={`btn btn-info ${round === 3 ? 'active' : 'disabled'}`}>
          <input type="checkbox" />
          {' '}
          Drama
        </label>
        <label className={`btn btn-info ${round === 4 ? 'active' : 'disabled'}`}>
          <input type="checkbox" />
          {' '}
          Samurai
        </label>
        <label className={`btn btn-info ${round === 5 ? 'active' : 'disabled'}`}>
          <input type="checkbox" />
          {' '}
          Fantasy
        </label>
      </div>
    </Row>
  </>
);

export default Header;
