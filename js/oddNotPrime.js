const oddNotPrime = n => {
  let results = [];

  const isPrime = number => {
    for (let i = 2; i < number; i++) {
      // prime numbers are only divisible by themselves, so we want it to equal 1
      if (number % i === 0) {
        return false;
      }
    }
    // if the number is greater than 1, and is prime, return true
    return number > 1;
  };
  // if num not prime and odd, we push to array
  for (let i = 0; i < n + 1; i++) {
    if (isPrime(i) === !true && i % 2 !== 0) {
      results.push(i);
    } else {
      // do nothing
    }
  }
  // get count of nums by return length
  return results.length;
};
