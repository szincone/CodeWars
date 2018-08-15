const maxTriSum = numbers => {
  // store 3 largest nums as a, b, c, spread to get all params
  // return as new set and reverse sort, return a,b,c summed
  const [a, b, c, ...rest] = [...new Set([...numbers])].sort((a, b) => b - a);
  return a + b + c;
};
