const filter_list = (l) => {
  // Return a new array with the strings filtered out
  let results = [];
  
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      results.push(l[i])
    }
    else {
      // do nothing
    }
  }
    return results;
}
