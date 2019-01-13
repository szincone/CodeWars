function sortArray(array) {
    let oddArr = [];
    let evenArr = [];
    let temp = [];
    const result = [];
    array.forEach(num => {
      if (num % 2 === 0) {
        evenArr.push(num)
      }
      else {
        oddArr.push(num)
      }
    });
    oddArr = oddArr.sort((a, b) => a - b); // ascending
    evenArr = evenArr.sort((a, b) => b - a); // descending
    array.forEach((num, i) => {
      if (num % 2 === 0) {
        temp = evenArr.shift();
        result.push(temp)
      }
      else {
        temp = oddArr.shift();
        result.push(temp)
      }
    });
    return result;
}
