const longestConsec = (arr, k) => {
  let longestString = "";
  let temp;
  // edge cases: make sure there are enough strings to compare
  if (k > arr.length || k <= 0) {
    return "";
  } else {
    for (let i = 0; i < arr.length; i++) {
      temp = arr.slice(i, i + k).join(""); // joins current strings and next string
      if (temp.length > longestString.length) {
        // if temp var is longer, we replace results var
        longestString = temp;
      }
    }
    return longestString;
  }
}
