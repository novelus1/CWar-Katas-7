function reverseWords(str) {
  let reverseWordsArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordsArr.join(" ");
}
