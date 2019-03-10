function moveZeros(arr) {
  let result = [];
  const zeroArr = [];
  arr.forEach((item) => {
    if (item === 0) {
      zeroArr.push(0);
    } else {
      result.push(item);
    }
  });
  result = result.concat(zeroArr);
  return result;
}
