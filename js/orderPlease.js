function order(words) {
  let wordsArr = words.split(' ');
  let results = words.split(' ')
  wordsArr.forEach((word, i) => {
    wordsArr.forEach((word2, j) => {
      if (!isNaN(word[j])){
        results.splice(word[j], 1, word)
      }
    });
  });
  return results.slice(1).join(" ");
}
