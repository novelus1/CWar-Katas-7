const filterString = function (value) {
  const onlyNumStr = value.replace(/\D/g, "");
  const onlyNum = parseInt(onlyNumStr, 10);

  return onlyNum;
};
