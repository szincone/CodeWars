const pigLatin = word => {
  let wordCopy = word;
  // valid words must be 2 or more chars long
  if (wordCopy.length < 2) {
    return wordCopy;
  }
  // if word starts with vowel add 'ay' to end and return
  if (
    wordCopy.charAt(0) === "a" ||
    wordCopy.charAt(0) === "e" ||
    wordCopy.charAt(0) === "i" ||
    wordCopy.charAt(0) === "o" ||
    wordCopy.charAt(0) === "u"
  ) {
    return wordCopy + "ay";
  }
  // else slice from second char to end, add first char and 'ay' to end
  else {
    return wordCopy.slice(1) + wordCopy.charAt(0) + "ay";
  }
};
