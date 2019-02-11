function alphabetPosition(str) {
  const result = [];
  str.split('').forEach((letter) => {
    if (
      (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) ||
      (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)
    ) {
      if (letter.toUpperCase() === letter) {
        result.push(letter.charCodeAt(0) - 64);
      } else {
        result.push(letter.charCodeAt(0) - 96);
      }
    }
  });
  return result.join(' ');
}
