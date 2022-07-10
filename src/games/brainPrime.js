import getRandomNumber from '../getRandomNumber.js';
import checkIfPrime from '../checkifPrime.js';
import checkInputAndGiveBaseLogic from '../index.js';

const startBrainPrimeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const checkIfPrimeForBaselogic = () => {
    const numberForQuestion = getRandomNumber(0, 100);
    const correctAnswer = checkIfPrime(numberForQuestion) ? 'yes' : 'no';
    const result = [numberForQuestion, correctAnswer];
    return result;
  };
  checkInputAndGiveBaseLogic(gameDescription, checkIfPrimeForBaselogic);
};

export default startBrainPrimeGame;
