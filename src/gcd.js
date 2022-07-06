import baseLogic from './index.js';
import greatestdivisor from './greatestdivisor.js';

const greatestCommonDivisor = () => {
  const taskDescription = 'Find the greatest common divisor of given numbers.';
  const gcd = () => {
    const firstNum = Math.round(Math.random() * 100);
    const secondNum = Math.round(Math.random() * 100);
    let resultOfGcd = greatestdivisor(firstNum, secondNum);
    const question = `${firstNum} ${secondNum}`;
    resultOfGcd = resultOfGcd.toString();
    return [question, resultOfGcd];
  };
  baseLogic(taskDescription, gcd);
};

export default greatestCommonDivisor;
