const checkIfPrime = (num = 92) => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num >= 2;
};

export default checkIfPrime;
