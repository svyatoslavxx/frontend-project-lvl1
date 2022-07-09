const findGreatestdivisor = (a, b) => {
  if (!b) {
    return a;
  }
  return findGreatestdivisor(b, a % b);
};

export default findGreatestdivisor;
