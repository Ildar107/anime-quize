import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/header/Header';
import Question from './components/question/Question';
import Answers from './components/answers/Answers';
import AnswerDescription from './components/answers/AnswerDescription';
import animeData from './data/anime';
import Sharingan from './components/sharingan/Sharingan';
import getRandomInt from './utils/randomInt';
import Result from './components/result/Result';
import setBodyImage from './utils/setBodyImage';
import Loader from './components/Loader/Loader';
import animation from './utils/backgroundAnimation';

const { data } = animeData;
const audioWinner = new Audio('./audio/one-punch-man.mp3');
const audioRightAnswer = new Audio('./audio/right.mp3');
const audioWrongAnswer = new Audio('./audio/error.mp3');
const maxAnswers = 6;
const maxRounds = 6;
const maxScore = 30;

const App = () => {
  const [currentRound, setRound] = useState(0);
  const [isRight, setIsRight] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [currentQuestion, setQuestion] = useState(
    data[currentRound][getRandomInt(maxAnswers)],
  );
  const [isBacgroundSeted, setIsBacgroundSeted] = useState(false);

  useEffect(() => {
    setBodyImage('./images/1.jpg').finally(() => {
      setIsBacgroundSeted(true);
      animation();
    });
  }, []);

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
    audioWinner.currentTime = 0.0;
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

  const onSelectAnswer = (e) => {
    if (!isRight) {
      data[currentRound][Number(e.target.id) - 1].selected = true;
    }
    if (Number(e.target.id) === currentQuestion.id) {
      audioRightAnswer.play();
      const itemAudio = document.querySelector('.audio-player audio');
      itemAudio.pause();
      setIsRight(true);
      setScore(score + 6 - data[currentRound].filter((x) => x.selected).length);
    } else if (!isRight) {
      audioWrongAnswer.play();
    }
  };

  if (!isBacgroundSeted) {
    return <Loader />;
  }

  return (
    <Container>
      <canvas id="world" width="1920" height="979" />
      <Header score={score} round={currentRound} />
      {
        isFinish
          ? <Result score={score} reset={reset} maxScore={maxScore} audioWinner={audioWinner} />
          : (
            <>
              <Question item={currentQuestion} isRight={isRight} />
              <Row className="answers__container">
                <Answers
                  items={data[currentRound]}
                  rightId={currentQuestion.id}
                  isRight={isRight}
                  setSelectedItem={(id) => setSelectedItem(data[currentRound][id - 1])}
                  onSelect={onSelectAnswer}
                />
                <AnswerDescription item={selectedItem} />
              </Row>
              <Row className="button__control">
                <button type="button" className="btn btn-info" disabled={isRight ? '' : 'disabled'} onClick={setNewLevel}>Next level</button>
              </Row>
            </>
          )
      }
      <Sharingan />
    </Container>
  );
};

export default App;
