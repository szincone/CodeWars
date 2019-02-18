function GetSum(a, b) {
  const result = [];
  const [low, high] = a < b ? [a, b] : [b, a];
  for (let i = low; i < high + 1; i++) {
    result.push(i);
  }
  return result.reduce((x, y) => x + y);
}
