function descendingOrder(n) {
  const digits = n.toString().split("");

  const sortedDigits = digits.sort((a, b) => b - a);

  const result = parseInt(sortedDigits.join(""));

  return result;
}
