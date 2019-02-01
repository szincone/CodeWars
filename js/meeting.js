function meeting(s) {
  const [stringObject, result] = [[], []];
  let splitString = s.split(';');
  splitString = splitString.map(name => name.toUpperCase());
  splitString.forEach((name) => {
    result.push(`(${name.split(':')[1]}, ${name.split(':')[0]})`);
  });
  result.sort();
  result.forEach((name, i) => {
    stringObject.push(`(${result[i]}, ${result[i]})`);
  });
  return result.join('').toString();
}
