function pigIt(str) {
  let strArr = str.split(' ');
  strArr = strArr.map(word =>
    word.match(/[!,'.?]/)
      ? word
      : word
          .slice(1)
          .concat(word.slice(0, 1))
          .concat('ay'),
  );
  return strArr.join(' ');
}
