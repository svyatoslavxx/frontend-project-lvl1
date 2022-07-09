import greatestdivisor from '../greatestdivisor.js';
import checkInputAndGiveBaseLogic from '../index.js';

const findGreatestCommonDivisor = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const getGcdForBaseLogic = () => {
    const firstNum = Math.round(Math.random() * 100);
    const secondNum = Math.round(Math.random() * 100);
    let resultOfGcd = greatestdivisor(firstNum, secondNum);
    const question = `${firstNum} ${secondNum}`;
    resultOfGcd = resultOfGcd.toString();
    return [question, resultOfGcd];
  };
  checkInputAndGiveBaseLogic(gameDescription, getGcdForBaseLogic);
};

export default findGreatestCommonDivisor;
