import getRandomNum from '../getRandomNum.js';
import checkIfPrime from '../checkifPrime.js';
import checkInputAndGiveBaseLogic from '../index.js';

const getPrimeStatus = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const checkIfPrimeForBaselogic = () => {
    const numberForQuestion = getRandomNum(0, 100);
    const correctAnswer = checkIfPrime(numberForQuestion) ? 'yes' : 'no';
    const result = [numberForQuestion, correctAnswer];
    return result;
  };
  checkInputAndGiveBaseLogic(gameDescription, checkIfPrimeForBaselogic);
};

export default getPrimeStatus;
