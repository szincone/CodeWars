const accum = s => {
  let results = [];
  let stringStorage = [];
  let finalResults = [];
  let realFinalResults = [];
  const string = s.toLowerCase();

  // create an array with first letter upper followed by lower * i
  for (let i = 0; i < string.length; i++) {
    stringStorage.push(string[i]);
    if (i <= stringStorage.length) {
      results.push(string[i].repeat(1).toUpperCase());
      results.push(string[i].repeat(i));
    }
  }
  // join upper with lowercase mumble and put in main array
  for (let i = 0; i < results.length; i++) {
    let every2 = [];
    every2.push(results[i], results[i + 1]);
    finalResults.push(every2);
  }
  // join individual upper and lower
  for (let i = 0; i < results.length; i += 2) {
    realFinalResults.push(finalResults[i].join().replace(/,/g, ""));
  }
  // join entire array with hyphens
  return realFinalResults.join().replace(/,/g, "-");
};
