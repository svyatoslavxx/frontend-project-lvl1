import baseLogic from './index.js';

const calc = () => {
  const taskDescription = 'What is the result of the expression?';
  const calcForBaseLogic = () => {
    const operatorList = ['+', '-', '*'];
    const operator = operatorList[Math.round(Math.random(0, 2))];
    const firstOperand = Math.round(Math.random() * 100);
    const secondOperand = Math.round(Math.random() * 100);
    let result = 0;
    const question = `${firstOperand} ${operator} ${secondOperand}`;
    if (operator === '+') {
      result = firstOperand + secondOperand;
    }
    if (operator === '-') {
      result = firstOperand - secondOperand;
    }
    if (operator === '*') {
      result = firstOperand * secondOperand;
    }
    result = result.toString();
    return [question, result];
  };

  baseLogic(taskDescription, calcForBaseLogic);
};

export default calc;
