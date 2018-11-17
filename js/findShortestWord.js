const findShort = s => {
  // turn string into array of words
  const stringSplitArray = s.split(" ");
  // set max word length to string length
  let wordLength = s.length;
  // iterate over words array
  stringSplitArray.forEach(word =>{
    // if current word is shorter in length that wordLength placeholder
    if (word.length < wordLength){
      // reassign wordLength to shortest word length
      wordLength = word.length
    }
    else {
      // do nothing
    }
  })
  // return result
  return wordLength
};
