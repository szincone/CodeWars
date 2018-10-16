const disemvowel = str => {
  let result = [];
  // iterate through the string
  for (let i = 0; i < str.length; i++) {
    // if individual character is not equal to vowel, push into result var
    if (
      str[i].toLowerCase() !== "a" &&
      str[i].toLowerCase() !== "e" &&
      str[i].toLowerCase() !== "i" &&
      str[i].toLowerCase() !== "o" &&
      str[i].toLowerCase() !== "u"
    ) {
      result.push(str[i]);
    }
  }
  // turn array into string
  return result.join("");
};
