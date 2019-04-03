function solution(str, ending) {
  const strArr = str.split('');
  const endingArr = ending.split('');
  const strMatch = endingArr
    .map(() => strArr.pop())
    .reverse()
    .join('');
  if (strMatch === endingArr.join('')) {
    return true;
  }
  return false;
}
