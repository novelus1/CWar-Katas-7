function sumTwoSmallestNumbers(numbers) {
  let array = numbers.slice();
  array.sort((a, b) => a - b);
  return array[0] + array[1];
}
