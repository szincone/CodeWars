function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = []
  for (let i = 0; i < geese.length; i++){
    if (!geese.includes(birds[i])){
      result.push(birds[i])
    }
  }
  return result
};
