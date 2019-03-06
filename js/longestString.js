function longest($a, $b) {
  const result = [];
  let combinedString = $a + $b;
  combinedString = combinedString.split('').sort();
  for (let i = 0; i < combinedString.length; i++) {
    if (combinedString[i] !== combinedString[i + 1]) {
      result.push(combinedString[i]);
    }
  }
  return result.join('');
}
