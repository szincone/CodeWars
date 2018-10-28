function spinWords(word) {
  let results = [];
  // turn string of words into array of words
  word = word.split(" ");
  word.forEach(word => {
    // if length of word is more than 5
    if (word.length > 4) {
      // split word into individual character array,
      // reverse the whole array and join back to a string
      results.push(
        word
          .split("")
          .reverse()
          .join(""),
      );
    } else {
      results.push(word);
    }
  });
  // return results array back into string form
  return results.join(" ");
}
