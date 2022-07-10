import getRandomNumber from '../getRandomNumber.js';
import checkIfPrime from '../checkifPrime.js';
import startGame from '../index.js';

const isNumberPrime = () => {
  const numberForQuestion = getRandomNumber(0, 100);
  const correctAnswer = checkIfPrime(numberForQuestion) ? 'yes' : 'no';
  return [numberForQuestion, correctAnswer];
};
const startBrainPrimeGame = () => {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  startGame(taskDescription, isNumberPrime);
};

export default startBrainPrimeGame;
