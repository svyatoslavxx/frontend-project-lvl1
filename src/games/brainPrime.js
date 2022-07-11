import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const isNumberPrime = (number) => {
  const firstPrimeNumber = 2;
  for (let i = firstPrimeNumber; i < number; i += 1) if (number % i === 0) return false;

  return number >= firstPrimeNumber;
};

const startBrainPrimeGame = () => {
  const numberForQuestion = getRandomNumber(1, 100);
  const correctAnswer = isNumberPrime(numberForQuestion) ? 'yes' : 'no';

  return [numberForQuestion, correctAnswer];
};

startGame('Answer "yes" if given number is prime. Otherwise answer "no"', startBrainPrimeGame);

export default startBrainPrimeGame;
