let collatz = (n) => {
  let nArray = [];
  
  // if n is 1, odd, or even
  // push result by array and 
  // use collatz algorithm
  while (n > 0) {
    if (n === 1) {
      nArray.push(n)
      n = 0;
    }
    else if (n % 2 !== 0){
      nArray.push(n);
      n = (n * 3) + 1
    }
    else if (n % 2 === 0){
      nArray.push(n);
      n = n / 2
    }
    else {
      nArray.push(n)
    }
    
  }
  // return length of array per
  // challenge requirements
    return nArray.length;
}
