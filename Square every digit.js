function squareDigits(num) {
  const eachNumber = num.toString().split("");
  const squaredNumber = eachNumber.map((digit) => Math.pow(parseInt(digit), 2));
  const result = parseInt(squaredNumber.join(""));
  return result;
}
