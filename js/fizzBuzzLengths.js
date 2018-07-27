const fizzBuzzLengths = (number) => {
  let multsOf3 = []
  let multsOf5 = []
  let multsOfBoth = []
  let solutionArray = [];
  for (let i = 1; i < number; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      multsOfBoth.push(i);
    }
    else if ((i % 3 === 0) && (i % 5 !== 0)) {
      multsOf3.push(i);
    }
    else if ((i % 3 !== 0) && (i % 5 === 0)) {
      multsOf5.push(i);
    }
    else {
      // do nothing
    }
  }
  solutionArray.push(multsOf3.length, multsOf5.length, multsOfBoth.length)
  return solutionArray;
}
