function countBits(n) {
  return (n >>> 0).toString(2).split(1).length - 1;
}
