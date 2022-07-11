import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const findGreatestDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return findGreatestDivisor(secondNumber, firstNumber % secondNumber);
};

const createQuestion = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;

  return [question, (findGreatestDivisor(firstNumber, secondNumber)).toString()];
};

const startBrainGcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  startGame(gameDescription, createQuestion);
};

export default startBrainGcdGame;
