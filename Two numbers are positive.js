function twoArePositive(a, b, c) {
  const positiveCount = (a > 0) + (b > 0) + (c > 0);
  return positiveCount === 2;
}
