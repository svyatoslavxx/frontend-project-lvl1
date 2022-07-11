import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const performCalculation = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return (firstOperand + secondOperand).toString();
    case '-':
      return (firstOperand - secondOperand).toString();
    case '*':
      return (firstOperand * secondOperand).toString();
    default: return Error('Error');
  }
};

const createExpression = () => {
  const operatorList = ['+', '-', '*'];
  const operator = operatorList[getRandomNumber(0, 2)];
  const firstOperand = getRandomNumber(0, 100);
  const secondOperand = getRandomNumber(0, 100);
  const question = `Question: ${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = performCalculation(firstOperand, operator, secondOperand);

  return [question, correctAnswer];
};

const startBrainCalcGame = () => {
  const taskDescription = 'What is the result of the expression?';
  startGame(taskDescription, createExpression);
};

export default startBrainCalcGame;
