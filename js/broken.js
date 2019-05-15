function broken(x) {
  return x
    .split('')
    .map(char => (!Number(char) ? 1 : 0))
    .join('');
}
