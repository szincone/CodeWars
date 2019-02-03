function XO(str) {
  const [xArr, oArr] = [[], []];
  str.split('').forEach((element) => {
    if (element.toLowerCase() === 'x') {
      xArr.push(element);
    }
    if (element.toLowerCase() === 'o') {
      oArr.push(element);
    }
  });
  return oArr.length === xArr.length;
}
