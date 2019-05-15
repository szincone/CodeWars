function meeting(arr) {
  const result = ['None available!'];
  arr.forEach((item, i) => {
    if (item === 'O') {
      result.push(i);
    }
  });
  return result.length > 1 ? result[1] : result[0];
}
