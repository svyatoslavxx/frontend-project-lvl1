import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isNumberEven = (number) => number % 2 === 0;

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAnswerPair = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const answer = isNumberEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startGame(taskDescription, generateQuestionAnswerPair);
