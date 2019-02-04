function squareDigits(num) {
  const numArr = num.toString().split('');
  numArr.forEach((element, i) => {
    numArr[i] = parseInt(element, 10) ** 2;
  });
  return parseInt(numArr.join(''), 10);
}
