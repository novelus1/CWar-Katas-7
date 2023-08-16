function getMean(arr, x, y) {
  if (x > 1 && x <= arr.length && y > 1 && y <= arr.length) {
    const firstXElements = arr.slice(0, x);
    const meanFirstX = firstXElements.reduce((sum, num) => sum + num) / x;
    const lastYElements = arr.slice(-y); 
    const meanLastY = lastYElements.reduce((sum, num) => sum + num) / y;

    return (meanFirstX + meanLastY) / 2;
  } else {
    return -1;
  }
}
