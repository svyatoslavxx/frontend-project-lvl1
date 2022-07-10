import greatestdivisor from '../greatestdivisor.js';
import startGame from '../index.js';

const startBrainGcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const getGcdForBaseLogic = () => {
    const firstNum = Math.round(Math.random() * 100);
    const secondNum = Math.round(Math.random() * 100);
    let resultOfGcd = greatestdivisor(firstNum, secondNum);
    const question = `${firstNum} ${secondNum}`;
    resultOfGcd = resultOfGcd.toString();
    return [question, resultOfGcd];
  };
  startGame(gameDescription, getGcdForBaseLogic);
};

export default startBrainGcdGame;
