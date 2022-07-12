import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isNumberEven = (number) => number % 2 === 0;

const createQuestion = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isNumberEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startBrainEvenGame = () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(taskDescription, createQuestion);
};

export default startBrainEvenGame;
