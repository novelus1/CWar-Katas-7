function dropCap(n) {
  const arr = n.split(" ");
  arr.forEach((word, index) => {
    if (word.length > 2) {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();

      arr[index] = firstLetter + rest;
    }
  });

  return arr.join(" ");
}
