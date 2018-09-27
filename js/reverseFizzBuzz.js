const reverseFizzBuzz = array => {
  let arrayVar = array;
  let results = [];
  for (let i = 0; i < arrayVar.length; i++) {
    if (arrayVar[i].toString().includes("FizzBuzz") && results.length !== 1) {
      results.push(i + 1, i + 1);
      return results;
    }
    // if element has Fizz and has not already been pushed
    else if (arrayVar[i].toString().includes("Fizz") && results.length === 0) {
      results.push(i + 1);
    } else {
      // do nothing
    }
  }
  for (let i = 0; i < arrayVar.length; i++) {
    // find Buzz
    if (arrayVar[i].toString().includes("Buzz")) {
      results.push(i + 1);
      return results;
    } 
    else {
      // do nothing
    }
  }
  return results;
};
