import isPrime from './checkifPrime.js';
import baseLogic from './index.js';
import getRandomNum from './getRandomNum.js';

const primeBody = () => {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const prime = () => {
    const numberForQuestion = getRandomNum(0, 100);
    let correctAnswer;
    if (isPrime(numberForQuestion) === true) correctAnswer = 'yes';
    if (isPrime(numberForQuestion) === false) correctAnswer = 'no';
    const result = [numberForQuestion, correctAnswer];
    return result;
  };
  baseLogic(taskDescription, prime);
};

export default primeBody;
