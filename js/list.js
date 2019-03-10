function list(names) {
  if (names.length === 0) {
    return '';
  }
  if (names.length === 1) {
    return names[0].name;
  }
  const result = [];
  names.forEach((name, i) => {
    if (i === names.length - 1 || i === names.length || i === 0) {
      if (i === names.length - 1) {
        result.push(' & ');
      }
      result.push(name.name);
    } else {
      result.push(', ', name.name);
    }
  });
  return result.join('');
}
