String.prototype.toJadenCase = function () {
  const words = this.split(" ");

  words.forEach((word, index) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();

    words[index] = firstLetter + rest;
  });

  return words.join(" ");
};
