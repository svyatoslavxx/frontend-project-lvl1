import checkInputAndGiveBaseLogic from '../index.js';
import getRandomNum from '../getRandomNum.js';

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
  const operator = operatorList[getRandomNum(0, 2)];
  const firstOperand = getRandomNum(0, 100);
  const secondOperand = getRandomNum(0, 100);
  const question = `Question: ${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = performCalculation(firstOperand, operator, secondOperand);
  return [question, correctAnswer];
};
const startBrainCalcGame = () => {
  const taskDescription = 'What is the result of the expression?';
  checkInputAndGiveBaseLogic(taskDescription, createExpression);
};

export default startBrainCalcGame;
