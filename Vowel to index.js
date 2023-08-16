function vowel2index(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const lowerChar = char.toLowerCase();

    if (vowels.includes(lowerChar)) {
      result += (i + 1).toString();
    } else {
      result += char;
    }
  }

  return result;
}
