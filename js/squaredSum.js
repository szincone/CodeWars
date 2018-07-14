function squareSum(numbers){
  let squareTotal = 0;
  for (let i = 0; i < numbers.length; i++) {
    squareTotal += numbers[i] * numbers[i];
  }
  return squareTotal;
}
