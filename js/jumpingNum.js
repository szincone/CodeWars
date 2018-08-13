const jumpingNumber = n => {
  //split num into individual digits, then
  // back to string, store in object
  let nString = n
    .toString()
    .split("")
    .map(a => +a);
  let jumping = false;

  // length of 1 means number is less than 10
  if (nString.length === 1) {
    return "Jumping!!";
  }
  // if the absolute diff between current and previous
  // item is more than one, not jumping, else it is
  // can't be zero either
  for (let i = 1; i < nString.length; i++) {
    if (Math.abs(nString[i] - nString[i - 1]) > 1) {
      return "Not!!";
    } else if (Math.abs(nString[i] - nString[i - 1]) === 0) {
      return "Not!!";
    } else {
      jumping = true;
    }
  }
  // useless ternary because it looks cooler
  // than just return "Jumping!!"
  return jumping ? "Jumping!!" : "Not!!";
};
