import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const isNumberPrime = (number) => {
  const firstPrimeNumber = 2;
  for (let i = firstPrimeNumber; i < number; i += 1) if (number % i === 0) return false;

  return number >= firstPrimeNumber;
};

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const generateQuestionAnswerPair = () => {
  const question = getRandomNumber(1, 100);
  const answer = isNumberPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startGame(taskDescription, generateQuestionAnswerPair);
