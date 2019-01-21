function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = [];
  birds.forEach(bird => {
    if (!geese.includes(bird)) {
      result.push(bird);
    }
  });
  return result;
}
