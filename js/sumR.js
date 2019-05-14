function sumR(x) {
  if (x.length === 0) {
    return 0;
  }
  if (x.length === 1) {
    return x[0];
  }
  const total = [...x];
  total[x.length - 2] = total.pop() + total[x.length - 2];
  return sumR(total);
}
