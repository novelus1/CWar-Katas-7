function isTriangle(a, b, c) {
  let sum1 = a + b;
  let sum2 = a + c;
  let sum3 = b + c;

  if (a < 0 || b < 0 || c < 0) {
    return false;
  }

  if (sum1 > c && sum2 > b && sum3 > a) {
    return true;
  } else {
    return false;
  }
}
