const fixStringCase = (s) => {
  let stringCopy = s;
  let result = [];
  let upperCount = 0;
  let lowerCount = 0;

  // iterate over string
  for (let i = 0; i < stringCopy.length; i++){
    // if char is uppercase add to upper count
    if (stringCopy.charAt(i) === stringCopy.charAt(i).toUpperCase()){
      upperCount += 1
    }
    // if char is lowercase add to lower count
    else{
      lowerCount += 1
    }
  }

  // if majority of chars are uppercase
  if (upperCount > lowerCount){
    // turn every char in string into uppercase
    for (let i = 0; i < stringCopy.length; i++){
      result.push(stringCopy[i].toUpperCase())
    }
  }
  // majority of chars are lowercase
  else {
    // turn every char in string into lower
    for (let i = 0; i < stringCopy.length; i++){
      result.push(stringCopy[i].toLowerCase())
    }
  }
  // turn array back into string
  return result.join("");
}
