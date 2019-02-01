function digitalRoot(n) {
  const result = n
    .toString()
    .split('')
    .map(num => Number(num))
    .reduce((a, b) => a + b);
  return result < 10 ? result : digitalRoot(result);
}
