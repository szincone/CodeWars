const isNarcissistic = n => {
  // turn n into string to get length
  // and split into indvidual nums array
  // for multiplication
  const numberLength = n.toString().length;
  let numbers = n.toString().split("");
  let sum = [];

  // go through numbers array, multiply by
  // length exponent, push to sum array
  for (let i = 0; i < numberLength; i++) {
    sum.push(Math.pow(parseInt(numbers[i], 10), numberLength));
  }

  // reduce sum array to get total sum
  sum = sum.reduce((a, b) => a + b);

  // if equal to og, return true
  // else not armstrong
  if (sum === n) {
    return true;
  } else {
    return false;
  }
};
