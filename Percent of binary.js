function successRate(binary) {
  let countZero = 0;
  let countOne = 0;

  for (const num of binary) {
    if (num === "1") {
      countOne++;
    }
    if (num === "0") {
      countZero++;
    }
  }
  if (countOne === 0) {
    return 0;
  }

  const total = countZero + countOne;
  const percentageOne = (countOne / total) * 100;

  return Math.round(percentageOne);
}
