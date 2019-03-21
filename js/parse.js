function parse(data) {
  const [splitData, result] = [data.split(''), []];
  let curVal = 0;
  splitData.forEach((item) => {
    if (item === 'i') {
      curVal += 1;
    } else if (item === 'd') {
      curVal -= 1;
    } else if (item === 's') {
      curVal **= 2;
    } else if (item === 'o') {
      result.push(curVal);
    }
  });
  return result;
}
