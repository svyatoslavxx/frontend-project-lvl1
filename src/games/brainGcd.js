import startGame from '../index.js';

const findGreatestDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGreatestDivisor(secondNumber, firstNumber % secondNumber);
};
const startBrainGcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const getGcdForBaseLogic = () => {
    const firstNum = Math.round(Math.random() * 100);
    const secondNum = Math.round(Math.random() * 100);
    let resultOfGcd = findGreatestDivisor(firstNum, secondNum);
    const question = `${firstNum} ${secondNum}`;
    resultOfGcd = resultOfGcd.toString();
    return [question, resultOfGcd];
  };
  startGame(gameDescription, getGcdForBaseLogic);
};

export default startBrainGcdGame;
