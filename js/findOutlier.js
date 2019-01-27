function findOutlier(ints) {
  let oddCheck = 0;
  let result;
  for (let i = 0; i < 3; i++) {
    if (ints[i] % 2 !== 0) {
      oddCheck += 1;
    }
  }
  oddCheck > 1 ? (oddCheck = true) : (oddCheck = false);
  ints.forEach(int => {
    if (oddCheck === true && int % 2 === 0) {
      result = int;
    } else if (oddCheck === false && int % 2 !== 0) {
      result = int;
    }
  });
  return result;
}
