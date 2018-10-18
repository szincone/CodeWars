const kaprekarSplit = n => {
  const nCopy = n;
  const nSquaredString = (nCopy * nCopy).toString();
  let nArray = [];
  let firstHalfString = [];
  let firstHalfNum = 0;
  let secondHalfNum = 0;

  // needed for 1 edge case
  if (nCopy === 1) {
    return 0;
  }
  // turn string into array
  for (let i = 0; i < nSquaredString.length; i++) {
    nArray.push(nSquaredString[i]);
  }
  // needed since shift on line 22 alters nArray length
  const nArrayCopy = nArray.join("").length;
  for (let i = 0; i < nArrayCopy; i++) {
    // shift first number off front of array into new array
    firstHalfString = parseFloat(nArray.shift()) + firstHalfString;
    // reverse (since it's backwards) and turn back to num
    firstHalfNum = parseFloat(
      firstHalfString
        .toString()
        .split("")
        .reverse()
        .join(""),
    );
    secondHalfNum = parseFloat(nArray.join(""));
    if (firstHalfNum + secondHalfNum === n) {
      return i + 1;
    }
  }
  // not a kaprekar, return -1
  return -1;
};
