import checkInputAndGiveBaseLogic from '../index.js';

const calculateNumbers = () => {
  const taskDescription = 'What is the result of the expression?';
  const calculateForBaseLogic = () => {
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

  checkInputAndGiveBaseLogic(taskDescription, calculateForBaseLogic);
};

export default calculateNumbers;
