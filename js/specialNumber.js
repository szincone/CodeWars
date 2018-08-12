const specialNumber = n => {
  // turn number to string and split up individually
  let nString = n.toString().split("");
  let specialArray = [];

  // push results to special array
  for (let i = 0; i < nString.length; i++) {
    if (
      nString[i] === "0" ||
      nString[i] === "1" ||
      nString[i] === "2" ||
      nString[i] === "3" ||
      nString[i] === "4" ||
      nString[i] === "5"
    ) {
      specialArray.push(nString[i]);
    } else {
      return "NOT!!";
    }
  }
  // as long as length is not 0, it's special
  if (specialArray.length > 0) {
    return "Special!!";
  }
};
