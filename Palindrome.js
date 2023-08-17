function isPalindrome(target) {
  const direct = [];
  const reversed = [];

  for (const char of target) {
    if (/[a-zA-Z]/.test(char)) {
      direct.push(char.toLowerCase());
      reversed.unshift(char.toLowerCase());
    }
  }

  return direct.join("") === reversed.join("");
}

console.log(isPalindrome("hah,hah hah HAH"));
