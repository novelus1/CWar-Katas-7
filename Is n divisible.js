function isDivisible(n, ...divisors) {
  for (const divisor of divisors) {
    if (n % divisor !== 0) {
      return false;
    }
  }
  return true;
}
