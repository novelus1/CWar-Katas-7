function solution(start, finish) {
  const arr = new Array(finish + 1).fill(Infinity);
  arr[start] = 0;

  for (let i = start; i <= finish; i++) {
    if (i + 1 <= finish) {
      arr[i + 1] = Math.min(arr[i + 1], arr[i] + 1);
    }
    if (i + 3 <= finish) {
      arr[i + 3] = Math.min(arr[i + 3], arr[i] + 1);
    }
  }

  return arr[finish];
}
