const findGreatestDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGreatestDivisor(secondNumber, firstNumber % secondNumber);
};

export default findGreatestDivisor;
