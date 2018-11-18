function capitalsFirst(str){
  const strArray = str.split(" ");
  let upperCaseWords = [];
  let lowerCaseWords = [];
  let result = [];
  // iterate over string array
  strArray.forEach(word => {
    // getting around edge cases
    if (word[0] !== "1" && word[0] !== "!"){
    // if it's uppercase, push to var
    if (word[0] === word[0].toUpperCase()){
      upperCaseWords.push(word)
    }
    // if it's lowercase, push to var
    else if (word[0] === word[0].toLowerCase()){
      lowerCaseWords.push(word);
    }
    else {
      // do nothing
    }
    }
  })
  // push upper string and lower string into empty array
  result.push(upperCaseWords.join(" "), lowerCaseWords.join(" "));
  // turn into string
  return result.join(" ");
}
