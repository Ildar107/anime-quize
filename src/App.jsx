import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/header/Header';
import Question from './components/question/Question';
import Answers from './components/answers/Answers';
import AnswerDescription from './components/answers/AnswerDescription';
import animeData from './data/anime';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const { data } = animeData;
const audioWinner = new Audio();
audioWinner.src = './audio/one-punch-man.mp3';
const maxAnswers = 6;
const maxRounds = 6;

const App = () => {
  const [currentRound, setRound] = useState(0);
  const [isRight, setIsRight] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [currentQuestion, setQuestion] = useState(
    data[currentRound][getRandomInt(maxAnswers)],
  );
  console.log(`Правильный ответ: ${currentQuestion.name}`);
  const setNewLevel = () => {
    if (currentRound + 1 < maxRounds) {
      setRound(currentRound + 1);
      setIsRight(false);
      setSelectedItem(null);
      setQuestion(data[currentRound + 1][getRandomInt(maxAnswers)]);
    } else {
      setIsFinish(true);
    }
  };

  const reset = () => {
    audioWinner.pause();
    data.forEach((element) => {
      element.forEach((x) => { x.selected = false; });
    });
    setScore(0);
    setIsFinish(false);
    setRound(0);
    setIsRight(false);
    setSelectedItem(null);
    setQuestion(data[0][getRandomInt(maxAnswers)]);
  };

  if (isFinish && score === 30) {
    audioWinner.play();
    return (
      <Container>
        <Header score={score} round={currentRound} />
        <Row className="finish__container finish__container_absolute justify-content-lg-center">
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
          <Col lg={11}><button type="button" className="btn btn-info reset-button" onClick={reset}>One more time!</button></Col>
        </Row>
      </Container>
    );
  }

  if (isFinish) {
    return (
      <Container>
        <Header score={score} round={currentRound} />
        <Row className="finish__container justify-content-lg-center">
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
          <Col lg={11}><button type="button" className="btn btn-info reset-button" onClick={reset}>One more time!</button></Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Header score={score} round={currentRound} />
      <Question item={currentQuestion} isRight={isRight} />
      <Row className="answers__container">
        <Answers
          items={data[currentRound]}
          rightId={currentQuestion.id}
          isRight={isRight}
          setSelectedItem={(id) => setSelectedItem(data[currentRound][id - 1])}
          onSelect={(e) => {
            console.log(e.target);
            if (!isRight) {
              data[currentRound][Number(e.target.id) - 1].selected = true;
            }
            if (Number(e.target.id) === currentQuestion.id) {
              const audio = new Audio();
              audio.src = './audio/right.mp3';
              audio.play();
              const itemAudio = document.querySelector('.audio-player audio');
              itemAudio.pause();
              setIsRight(true);
              setScore(score + 6 - data[currentRound].filter((x) => x.selected).length);
            } else if (!isRight) {
              const audio = new Audio();
              audio.src = './audio/error.mp3';
              audio.play();
            }
          }}
        />
        <AnswerDescription item={selectedItem} />
      </Row>
      <Row className="button__control">
        <button type="button" className="btn btn-info" disabled={isRight ? '' : 'disabled'} onClick={setNewLevel}>Next level</button>
      </Row>
    </Container>
  );
};

export default App;
