const checkIfPrime = (number = 92) => {
  for (let i = 2; i < number; i += 1) if (number % i === 0) return false;
  return number >= 2;
};

export default checkIfPrime;
