function removeSmallest(numbers) {
  const smallestNumber = Math.min(...numbers);
  const smallestNumberIndex = numbers.indexOf(smallestNumber);

  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i !== smallestNumberIndex) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}
