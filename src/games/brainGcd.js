import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const findGreatestDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return findGreatestDivisor(secondNumber, firstNumber % secondNumber);
};

const taskDescription = 'Find the greatest common divisor of given numbers.';

const generateQuestionAnswerPair = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = findGreatestDivisor(firstNumber, secondNumber).toString();

  return [question, answer];
};

export default () => startGame(taskDescription, generateQuestionAnswerPair);
