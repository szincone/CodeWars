function findUniq(arr) {
  const [result, tempArr] = [[], []];
  arr.forEach((item) => {
    arr[0] === item ? result.push(item) : tempArr.push(item);
  });
  return result.length > tempArr.length ? tempArr[0] : result[0];
}
