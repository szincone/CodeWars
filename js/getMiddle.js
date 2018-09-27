const getMiddle = s => {
  let newString = "";
  const stringCopy = s;
  // if even in length
  if (s.length % 2 === 0) {
    // return middle 2 chars
    newString =
      stringCopy.charAt(stringCopy.length / 2 - 1) +
      stringCopy.charAt(stringCopy.length / 2);
  }
  // if odd in length
  else {
    // return middle char
    newString = stringCopy.charAt(stringCopy.length / 2);
  }
  return newString;
};
