import checkInputAndGiveBaseLogic from '../index.js';
import getRandomNum from '../getRandomNum.js';

const calculateNumbers = () => {
  const gameDescription = 'What is the result of the expression?';
  const calculateForBaseLogic = () => {
    const operatorList = ['+', '-', '*'];
    const operator = operatorList[getRandomNum(0, 2)];
    const firstOperand = getRandomNum(0, 100);
    const secondOperand = getRandomNum(0, 100);
    let result = 0;
    const question = `${firstOperand} ${operator} ${secondOperand}`;
    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      default: Error('Error');
    }
    result = result.toString();
    return [question, result];
  };

  checkInputAndGiveBaseLogic(gameDescription, calculateForBaseLogic);
};

export default calculateNumbers;
