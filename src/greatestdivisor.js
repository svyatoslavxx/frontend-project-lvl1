const greatestdivisor = (a, b) => {
  if (!b) {
    return a;
  }
  return greatestdivisor(b, a % b);
};

export default greatestdivisor;
