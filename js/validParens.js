function validParentheses(parens) {
  const parensArr = parens.replace('()', '');
  return parensArr.includes('()') ? validParentheses(parensArr) : parensArr.length === 0;
}
