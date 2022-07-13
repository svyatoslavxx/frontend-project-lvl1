import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const performCalculation = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return (firstOperand + secondOperand);
    case '-':
      return (firstOperand - secondOperand);
    case '*':
      return (firstOperand * secondOperand);
    default: return Error('Error');
  }
};

const taskDescription = 'What is the result of the expression?';

const generateQuestionAnswerPair = () => {
  const operatorsList = ['+', '-', '*'];
  const operator = operatorsList[getRandomNumber(0, 2)];
  const firstOperand = getRandomNumber(0, 100);
  const secondOperand = getRandomNumber(0, 100);
  const answer = performCalculation(firstOperand, operator, secondOperand).toString();
  const question = `${firstOperand} ${operator} ${secondOperand}`;

  return [question, answer];
};

export default () => startGame(taskDescription, generateQuestionAnswerPair);
