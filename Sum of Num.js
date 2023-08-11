function getSum(a, b) {
  if (a === b) {
    return a;
  }

  let sum = 0;
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  for (let num = start; num <= end; num++) {
    sum += num;
  }

  return sum;
}
