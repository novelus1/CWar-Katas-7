function minMax(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const newArray = [min, max];
  return newArray;
}
