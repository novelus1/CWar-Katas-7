const binaryArrayToNumber = (arr) => {
  return arr.reduce((acc, val) => {
    return (acc << 1) | val;
  });
};
