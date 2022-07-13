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

const taskDescription = 'What is the result of the expression?';

const generateQuestionAnswerPair = () => {
  const operatorList = ['+', '-', '*'];
  const operator = operatorList[getRandomNumber(0, 2)];
  const firstOperand = getRandomNumber(0, 100);
  const secondOperand = getRandomNumber(0, 100);
  const answer = performCalculation(firstOperand, operator, secondOperand);
  const question = `${firstOperand} ${operator} ${secondOperand}`;

  return [question, answer];
};

export default () => startGame(taskDescription, generateQuestionAnswerPair);
