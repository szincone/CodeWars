String.prototype.toJadenCase = function () {
  //...
  let result = [];
  let string = this.split(" ")
  for (let i = 0; i < string.length; i++){
    result.push(string[i][0].toUpperCase() + string[i].slice(1))
  }
  return result.join(" ")
};
