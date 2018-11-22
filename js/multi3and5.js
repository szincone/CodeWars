function solution(number) {
  let results = [];
  // use number as a limit for our loop condition
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // if multiple of 3 and 5 push to results
      results.push(i);
    } else if (i % 3 === 0 && i % 5 !== 0) {
      // if multiple of only 3
      results.push(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      // if multiple of only 5
      results.push(i);
    }
  }
  if (results.length === 0) {
    // if no multiples, return 0
    return 0;
  } else {
    // return the sum of the array
    return results.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
  }
}
