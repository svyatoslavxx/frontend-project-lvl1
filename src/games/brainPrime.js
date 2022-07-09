import getRandomNum from '../getRandomNum.js';
import checkIfPrime from '../checkifPrime.js';
import checkInputAndGiveBaseLogic from '../index.js';

const getPrimeStatus = () => {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const checkIfPrimeForBaselogic = () => {
    const numberForQuestion = getRandomNum(0, 100);
    let correctAnswer;
    if (checkIfPrime(numberForQuestion) === true) correctAnswer = 'yes';
    if (checkIfPrime(numberForQuestion) === false) correctAnswer = 'no';
    const result = [numberForQuestion, correctAnswer];
    return result;
  };
  checkInputAndGiveBaseLogic(taskDescription, checkIfPrimeForBaselogic);
};

export default getPrimeStatus;
