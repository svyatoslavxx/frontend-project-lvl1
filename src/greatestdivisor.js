const findGreatestdivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGreatestdivisor(secondNumber, firstNumber % secondNumber);
};

export default findGreatestdivisor;
